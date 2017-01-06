import Mysql from "../classes/mysql";
import Order from "./../models/order"
class Action{
    getCustomer(data, socket){
        var saler = socket.user.uid;

        Mysql().get("user", {saler}).then((customers)=>{
            var uids = customers.map(user=>user.uid);
            socket.send({type:'partnerCustomer', customers:uids});
        });
    }
    async getOrder({date}, socket){
        var saler = socket.user.saler;
        var orders = await Order.getSalerOrderByDate(saler, date);
        socket.send({"action":'saler.getOrder',orders:orders.json()});
    }

}

export default new Action();