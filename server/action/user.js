import Mysql from "../classes/mysql";
import Weixin from "../classes/weixin";
import Model from "../classes/model"



function _sendUserInfo(socket,openid){

    Mysql().getOne("user", {openid}).then(({access_token, refresh_token, ...userinfo})=>{
        socket.user = new Model(userinfo);
        socket.send({type:"loginSucc", userinfo})
    });
}
function _checkLogin(socket){
    if(socket.user && socket.user.openid){
        return true;
    } else{
        socket.send({action:"needLogin"});
        return false;
    }
}

class Action{
    constructor(){

    }
    login(data, socket){
        let {username, code, openid} = data;
        if(code){
            WeiXin.sns.clienToken({code}).then((data)=>{
                let {access_token, openid,errcode} = data;
                if(40029 == errcode) {
                    socket.send({type:"invalidCode"})
                    return;
                }
                Mysql().save("user", data);


                var path = `/user/info?openid=${openid}&lang=zh_CN`;
                WeiXin.sns.clientUserInfo({access_token,openid}).then((userinfo)=>{

                    Mysql().save("user", userinfo);
                    _sendUserInfo(socket, openid);
                })
            });

        }
        else if(openid){
            _sendUserInfo(socket, openid);
        }
    }
    updateinfo(data,socket){
        if(!_checkLogin(socket)){return;};
        socket.user.set(data);
        var openid = socket.user.openid;
        Mysql().save("user",{...data, openid});
    }
    getJSParam(data, socket){
        WeiXin.sns.jsParam(data).then((params)=>{user.send({ type:"jsParam", ...params})})
    }
    disconnect(data, user){

        console.log(user.nickName, "disconnect");
    }
}

const action = new Action();

export default  action;