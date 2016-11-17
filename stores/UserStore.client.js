import io from 'socket.io-client';
import dispatcher from "../classes/dispatcher";
import UserModel from "../models/UserModel";


let  socket = io();


let User = new UserModel.model(socket);

socket.on('action',function(action){
    console.log("socket recieve",action);
    let {type, ...data} = action;
    dispatcher.dispatch({type, data, user:User});
});

export default User;

User.toWeiXinLogin = ()=> {
    var redirect = encodeURIComponent("http://wx.markmeonline.com");
    var url = `https://sz.open.weixin.qq.com/connect/oauth2/authorize?appid=wx5f6db5bf7d4d7ad1&redirect_uri=${redirect}&response_type=code&scope=snsapi_userinfo&state=ABC#wechat_redirect`;
    window.location.href = url;
}

User.dispatchToken = dispatcher.register((action)=>{
    let {type, data, user} = action;
    typeof actions[action.type] == "function"
    && actions[action.type](data);
});


var actions = {
    needLogin(){
        User.emit("needLogin");
    },
    invalidCode(){
      User.toWeiXinLogin();
    },
    userinfo({userinfo}){
        localStorage.setItem("openid", userinfo.openid);
        User.set(userinfo);
        User.emitLogin();
    },

};
