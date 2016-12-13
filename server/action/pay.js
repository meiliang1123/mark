import Mysql from "../classes/mysql";
import Weixin from "../classes/weixin";
import Order from "../classes/order"

class Action{
    getPayParam({products}, socket){
        if(!socket.user) return ;
        var openid= socket.user.openid;
        Order.create(products, socket.user).then(({nonce,fee, body})=>{
            let
                out_trade_no = nonce,
                total_fee = fee;

            return Weixin.pay.payParam({body, out_trade_no, total_fee, openid})
        }).then((payParam)=>{

            socket.send({type:'payParam', payParam});
        });  //*/
    }
}

export default new Action();