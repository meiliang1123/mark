import Mysql from "../classes/mysql";
import Weixin from "../classes/weixin";
import Model from "../classes/model"



function _sendUserInfo(socket,openid){

    Mysql().getOne("user", {openid}).then((data)=>{
        if(data == undefined){
            socket.send({action:"invalidCode"});
            return;
        }
        var {access_token, refresh_token, ...userinfo} = data;
        socket.user = new Model(userinfo);
        socket.send({action:"loginSucc", userinfo})
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
            Weixin.sns.clienToken({code}).then((data)=>{
                let {access_token, openid,errcode} = data;
                if(40029 == errcode) {
                    socket.send({action:"invalidCode"})
                    return;
                }
                Mysql().save("user", data);


                var path = `/user/info?openid=${openid}&lang=zh_CN`;
                Weixin.sns.clientUserInfo({access_token,openid}).then((userinfo)=>{

                    Mysql().save("user", userinfo);
                    _sendUserInfo(socket, openid);
                })
            });

        }
        else if(openid){
            _sendUserInfo(socket, openid);
        }
    }
    update(userinfo,socket){
        if(userinfo.userinfo){
            userinfo = userinfo.userinfo;
        }

        if(!_checkLogin(socket)){return;};
        var uid = socket.user.uid;
        var openid = socket.user.openid;
        var data = {...userinfo, uid, openid};
        socket.user.set(data);
        Mysql().save("user",data);
        socket.send({action:"userinfo", ...data})
    }
    get({uid}, socket){
        Mysql().getOne("user", {uid}).then(({nickname, headimgurl, userName, trust, })=>{

            socket.send({action:"userinfo", nickname,uid, headimgurl,userName, trust});
        });
    }
    getJSParam(data, socket){
        Weixin.sns.jsParam(data).then((params)=>{user.send({ action:"jsParam", ...params})})
    }
    disconnect(data, user){

        console.log(user.nickName, "disconnect");
    }
}

const action = new Action();

export default  action;