import io from 'socket.io-client';
import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import WeixinStore from "./WeixinStore"
import Util from "../util";

let  socket = io();
socket.on('message',function(action){
    console.log("socket recieve",action);
    let {type, ...data} = action;
    dispatcher.dispatch({type, data});
});

class Model extends BaseModel {
}



class User extends BaseStore {
    constructor(){
        super(Model, 'openid');
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
    saler(){
        var openid = localStorage.saler;
        if(!openid) openid = "ou0vGvuFAdFHiWiaS2TybHkGP8QA";
        return this.instance(openid);
    }
    triggerAddress(force = false){

        if(!this.getAddress().detailInfo || force){
            WeixinStore.openAddress().then((data)=>{
                UserStore.me.set(data);
                UserStore.send({type:"updateUserinfo", userinfo:User.get()})
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
      Util.weixinRedirect();
    },
    loginSucc({userinfo}){
        localStorage.setItem("openid", userinfo.openid);
        UserStore.me = UserStore.instance(userinfo);

        var url = window.location.origin + window.location.pathname;
        UserStore.send({action:'util.jsParam',client_url: url})
        var {code, saler} = Util.getQuery();
        if(saler){
            localStorage.saler = saler;
            UserStore.send({action:"user.update", saler})

        }

        UserStore.send({action:"user.info", openid:UserStore.saler().openid});

    },
    userinfo({userinfo}){
        console.log(userinfo);
      UserStore.set(userinfo);
    },

};
dispatcher.Reg(actions, "user");