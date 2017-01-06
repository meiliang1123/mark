import Mysql from "../classes/mysql";
import Weixin from "../classes/weixin";
import User from "./../models/user"


class Action{
    constructor(){

    }
    async login(data, socket){
        var {code, openid} = data;
        if(code){
            var data = await Weixin.sns.clienToken({code})

            var {access_token, openid,errcode} = data;
            if(40029 == errcode) {
                socket.send({action:"invalidCode"})
                return;
            }
        }
        if(openid){
            var user = await User.getByOpenid(openid);
            if(access_token){
                var info = await Weixin.sns.clientUserInfo({access_token,openid})
                user.save(info);
            }
            if(user.id) {
                socket.user = user;
                socket.send({action:"loginSucc", userinfo:user.data})
            }
        }

    }
    update(userinfo,socket){
        if(!socket.checkLogin())return;

        if(userinfo.userinfo){
            userinfo = userinfo.userinfo;
        }
        delete userinfo.openid;
        socket.user.save(userinfo);
        socket.send({action:"userinfo", ...socket.user.data})
    }
    async get({uid}, socket){

        var user = await User.getByKey(uid);
        socket.send({action:"userinfo",...user.baseinfo()});
        
    }
    disconnect(data, socket){

        console.log(socket.user && socket.user.nickname, "disconnect");
    }
}

const action = new Action();

export default  action;