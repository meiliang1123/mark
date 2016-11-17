import dispatcher from "../classes/dispatcher";
import UserModel from "../models/UserModel";
import WeiXin from "../classes/weixin";
import Mysql from "../classes/mysql";

let _users = [];

function _userConnect(socket){
    let user = socket.user = new UserModel.model(socket);
    let id =  _users.push(user);

    socket.on('action', function(action){
        let {type, ...data} = action;
        if(!user.get("openid") && type!="login"){
            user.send({type:"needLogin"});
            return;
        }
        dispatcher.dispatch({type, data, user});
    });
    socket.on('disconnect', function(){
        let action = {type:"disconnect",user};
        dispatcher.dispatch(action);
    });
}





var actions = {
    connect(action){ //special
        _userConnect(action.socket);
    },
    login(data, user){
        let {username, code, openid} = data;
        if(code){
            WeiXin.clienToken({code}).then((data)=>{
                let {access_token, openid,errcode} = data;
                if(40029 == errcode) {
                    user.send({type:"invalidCode"})
                    return;
                }
                Mysql().save("user", data);
                WeiXin.clientUserInfo({access_token,openid}).then((userinfo)=>{
                    Mysql().save("user", userinfo);
                    user.set(userinfo);
                    user.send({type:"userinfo",userinfo});
                })

            });
            return;
        }
        if(openid){
            Mysql().getOne("user",{openid}).then(({openid, nickname, headimgurl})=>{
                var userinfo = {openid, nickname, headimgurl};
                user.set(userinfo);
                user.send({type:"userinfo", userinfo})
            })
            return;
        }
        if(username){
            let uid = _users.findIndex(value=>value == user);
            user.set({uid, username});
            let userinfo = user.get();
            user.send({type:"userinfo", userinfo});
            return;
        }

    },
    disconnect(data, user){
        console.log(user.get(), "disconnect");
    }
}

dispatcher.Reg(actions);


export default UserModel;

