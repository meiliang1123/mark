import io from 'socket.io-client';
import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
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
        let {userName, postalCode , provinceName , cityName  , countryName , detailInfo, nationalCode , telNumber} = User.get();
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

}

var UserStore = new User(Model);
UserStore.login();
var {code, saler} = Util.getQuery();
if(saler){

    localStorage.saler = saler;
    UserStore.send({action:"user.updateinfo", saler})
}


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
        //alert(url);  //why this is so weird!
        UserStore.send({action:'util.jsParam',client_url: url})
    },
    jsParam(param){
        var def = {
        //    debug:true,
            jsApiList:['openAddress',"chooseWXPay","getLatestAddress"]
        }
        wx.config({...def,...param});
    }
};
dispatcher.Reg(actions, "user");