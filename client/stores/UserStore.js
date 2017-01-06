import io from 'socket.io-client';
import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import Util from "../util";

let  socket = io();
socket.on('message',function(msg){
    console.log("socket recieve",msg);

    dispatcher.dispatch(msg);
});

class Model extends BaseModel {
    static keyProp = "uid"
    constructor(data){
        var dft = {
            openid:"",
            nickname:"",
        }
        super({...dft, ...data})
    }
}

let loginFlag = false;

function broadcastLogin(resolve){
    var interval = setInterval(()=>{
        if(loginFlag) {
            resolve();
            clearInterval(interval);
        }

    }, 100)
}


class User extends BaseStore {
    constructor(){
        super(Model, 'uid');
    }
    refresh(model){
        var uid= model.uid;
        UserStore.send({action:'user.get', uid});

    }

    async send(action){
        await UserStore.LoginPromise;
        socket.send( action);
        console.log("user send", action);
    }
    login(){
        var info = Util.loginInfo();
        socket.send({action:"user.login", ...info});
        console.log("user login with:", info);
    }
    get me(){
        var uid = localStorage.uid;
        return UserStore.instance(uid)
    }
    get saler(){
        var uid = localStorage.saler;
        if(!uid) uid = 10000006;
        return this.instance(uid);
    }
    saveInfo(data){
        UserStore.me.set(data);
        UserStore.send({action:"user.update", userinfo:data})
    }
    pay(products, address){
        UserStore.send({action:"pay.weixin", products, address});
    }
    LoginPromise = new Promise(broadcastLogin)
}

var UserStore = new User(Model);

export default UserStore;


var actions = {
    needLogin(){
        UserStore.login();
    },
    invalidCode(){
        delete localStorage.openid;
        Util.weixinRedirect();
    },
    loginSucc({userinfo}){
        localStorage.setItem("openid", userinfo.openid);
        localStorage.setItem("uid", userinfo.uid);
        UserStore.set(userinfo);

        loginFlag = true;

    },
    userinfo(userinfo){
        if(userinfo.userinfo){
            userinfo = userinfo.userinfo;
        }
        UserStore.set(userinfo);
    },

};
dispatcher.Reg(actions, "user");