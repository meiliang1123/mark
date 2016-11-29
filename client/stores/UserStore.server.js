import dispatcher from "../client/dispatcher";
import UserModel from "../models/UserModel";
import WeiXin from "../server/classes/weixin";
import Mysql from "../server/classes/mysql";

//let _users = [];

function _userConnect(socket){
    let user = socket.user = new UserModel.model(socket);
//    let id =  _users.push(user);

    socket.on('action', function(action){
        let {type, ...data} = action;
        console.log(action);
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


function _sendUserInfo(user,openid){
    Mysql().getOne("user", {openid}).then(({access_token, refresh_token, ...userinfo})=>{
        user.set(userinfo);
        user.send({type:"userinfo", userinfo})
    });
}



var actions = {
    connect(action){ //special
        _userConnect(action.socket);
    },
    login(data, user){
        let {username, code, openid} = data;
        if(code){
            WeiXin.sns.clienToken({code}).then((data)=>{
                let {access_token, openid,errcode} = data;
                if(40029 == errcode) {
                    user.send({type:"invalidCode"})
                    return;
                }
                Mysql().save("user", data);


                var path = `/user/info?openid=${openid}&lang=zh_CN`;
                WeiXin.sns.clientUserInfo({access_token,openid}).then((userinfo)=>{

                    Mysql().save("user", userinfo);
                    _sendUserInfo(user, openid);
                })
            });
            return;
        }
        if(openid){
            _sendUserInfo(user, openid);
            return;
        }
    },
    updateUserinfo({userinfo},user){
        user.set(userinfo);
        Mysql().save("user",userinfo);
    },
    getJSParam(data, user){
        WeiXin.sns.jsParam(data).then((params)=>{user.send({ type:"jsParam", ...params})})
    },
    disconnect(data, user){

        console.log(user.nickName, "disconnect");
    }
}

dispatcher.Reg(actions, "user");


export default UserModel;

