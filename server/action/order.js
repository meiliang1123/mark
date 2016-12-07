import Mysql from "../classes/mysql";
import Weixin from "../classes/weixin";

class Action{
    getMyOrder(data, socket){
        if(!socket.user) return ;
        var openid = socket.user.openid;
        Mysql().get("combine", {openid})
            .then(combines =>{
                socket.send({action:'combines', combines})
            })
        Mysql().get("orders", {openid})
            .then(orders=>{
                socket.send({action:'orders', orders})
            })

    }
}

export default new Action();