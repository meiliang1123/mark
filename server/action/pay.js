import Mysql from "../classes/mysql";
import Weixin from "../classes/weixin";

class Action{
    getPayParam({products}, socket){
        var titles = [];
        var fee = 0;
        var nonce = "" + (new Date()).getTime() + parseInt(Math.random()*100);
        var user = socket.user;
        var openid= user.openid;
        var  userName = user.userName ,telNumber = user.telNumber , address = user.provinceName + user.cityName + user.countryName + user.detailInfo + user.postalCode;
        var ordersPromise = Object.keys(products).map((id)=>{
            var count = products[id];
            return Mysql().getOne("product", {id}).then((product)=>{
                titles.push(`${product.title} * ${count}`)
                fee += product.price * count;

                var order = {product:id, openid, count,nonce, fee: product.price * count, userName, telNumber, address};
                return Mysql().save("orders", order)
            }).then((ret)=>{
                return Mysql().getOne("orders", {id:ret.insertId})
            })
        })

        Promise.all(ordersPromise).then((orders)=>{
            Mysql().save("combine", {nonce, fee})

            let body = titles.join("\n"),
                out_trade_no = nonce,
                total_fee = fee;

            return Weixin.pay.payParam({body, out_trade_no, total_fee, openid})
        }).then((payParam)=>{
            console.log(payParam, "xxx");
            socket.send({type:'payParam', payParam});
        });  //*/
    }
    orderComplete(data){
        //sign check  first to ensure security!!
        var nonce = data.out_trade_no[0],
            dealno = data.transaction_id[0],
            fee = data.total_fee[0];

        Mysql().save("combine", {nonce, dealno, fee})

        var proms = Mysql().get("orders",{nonce}).then((orders)=>{
            orders.map(Order.succ);
        })

    }

}

export default new Action();