import Mysql from "../classes/mysql";

class Action{
    get(data, socket){
        data = {...data, openid:socket.user.openid};
        Mysql().get("provider", data).then((provider)=>{
            socket.send({type:'provider', provider});
        });
    }

}

export default new Action();