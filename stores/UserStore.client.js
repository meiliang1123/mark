import io from 'socket.io-client';
import dispatcher from "../classes/dispatcher";
import UserModel from "../models/UserModel";


let  socket = io();


let User = new UserModel.model(socket);
User.set({neeLogin: true});

socket.on('action',function(action){
    console.log("socket recieve",action);
    let {type, ...data} = action;
    dispatcher.dispatch({type, data, user:User});
});

export default User;


User.toWeiXinLogin = ()=> {
    var redirect = encodeURIComponent(location.origin + location.pathname + location.hash);
    var url = `https://sz.open.weixin.qq.com/connect/oauth2/authorize?appid=wx5f6db5bf7d4d7ad1&redirect_uri=${redirect}&response_type=code&scope=snsapi_userinfo&state=ABC#wechat_redirect`;
    window.location.href = url;
}

User.getAddress = ()=>{
    let {userName, postalCode , provinceName , cityName  , countryName , detailInfo, nationalCode , telNumber} = User.get();
    return {userName, postalCode , provinceName , cityName  , countryName , detailInfo, nationalCode , telNumber};
}

User.editAddress = (force = false)=>{

    if(!User.detailInfo || force){
        wx.ready(()=>{
            wx.openAddress({
                success:function(data){
                    User.set(data);
                    User.send({type:"updateUserinfo", userinfo:User.get()})
                }
            })
        })
    }

}


var actions = {
    needLogin(){
        console.log("??");
        var ua = window.navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
            var openid = localStorage.getItem("openid");
            if(openid && openid != "undefined") {
                User.send({type:"login", openid})
                return;
            }
        }
        var {code, ...query} = _query2Object(window.location.search);
        if(code){
            User.send({type:"login", code})
            return;
        }
        User.toWeiXinLogin();
    },
    invalidCode(){
      User.toWeiXinLogin();
    },
    userinfo({userinfo}){
        localStorage.setItem("openid", userinfo.openid);
        User.set(userinfo);
        User.set({neeLogin: false});
        User.emitLogin();
        User.send({type:'getProduct'});
        var url = window.location.origin + window.location.pathname;
        //alert(url);  //why this is so weird!
        User.send({type:'getJSParam',client_url: url})
    },
    jsParam(param){
        var def = {debug:true,jsApiList:['openAddress',"chooseWXPay","getLatestAddress"]}
        wx.config({...def,...param});
    }
};
User.dispatchToken = dispatcher.Reg(actions, "user");