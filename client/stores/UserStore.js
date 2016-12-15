import io from 'socket.io-client';
import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import WeixinStore from "./WeixinStore"
import Util from "../util";

let  socket = io();
socket.on('message',function(msg){
    console.log("socket recieve",msg);

    dispatcher.dispatch(msg);
});

class Model extends BaseModel {
    constructor(data){
        var dft = {
            openid:"",
            nickname:"",
        }
        super({...dft, ...data})
    }
}



class User extends BaseStore {
    constructor(){
        super(Model, 'uid');
    }
    refresh(model){
        var uid= model.uid;
        UserStore.send({action:'user.get', uid});

    }

    getAddress (){
        let {userName, postalCode , provinceName , cityName  , countryName , detailInfo, nationalCode , telNumber} = UserStore.me.data;
        return {userName, postalCode , provinceName , cityName  , countryName , detailInfo, nationalCode , telNumber};
    }

    send(action){
        console.log("user send", action);
        socket.send( action);
    }
    login(){
        var info = Util.loginInfo();
        UserStore.send({action:"user.login", ...info});
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

    triggerAddress(force = false){

        if(!this.getAddress().detailInfo || force){
            WeixinStore.openAddress().then((data)=>{
                UserStore.me.set(data);
                UserStore.send({action:"user.update", userinfo:data})
            })
        }

    }

}

var UserStore = new User(Model);
UserStore.login();
console.log(UserStore);


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
        UserStore.emit("login");
        var url = window.location.origin + window.location.pathname +  window.location.search;
        UserStore.send({action:'util.jsParam',client_url: url})
        var {code, saler} = Util.getQuery();
        if(saler){
            UserStore.send({action:"user.update", saler})

        }


    },
    userinfo(userinfo){
        if(userinfo.userinfo){
            userinfo = userinfo.userinfo;
        }
        console.log(userinfo);
      UserStore.set(userinfo);
    },

};
dispatcher.Reg(actions, "user");