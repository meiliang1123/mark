import Mysql from "../classes/mysql";

class Action{
    getCustomer(data, socket){
        var saler = socket.user.uid;

        Mysql().get("user", {saler}).then((customers)=>{
            var uids = customers.map(user=>user.uid);
            socket.send({type:'partnerCustomer', customers:uids});
        });
    }

}

export default new Action();