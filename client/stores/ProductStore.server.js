import dispatcher from "../client/dispatcher";
import Mysql from "../server/classes/mysql";
import Product from "../models/ProductModel";
import Weixin from "../server/classes/weixin";
import Order from "../server/classes/order";

    dispatcher.Reg({
    getProduct(data, user){
        Mysql().get("product", data).then((product)=>{
            user.send({type:'product', product});
        });
    },
    getPayParam({products}, user){
        var titles = [];
        var fee = 0;
        var nonce = "" + (new Date()).getTime() + parseInt(Math.random()*100);
        var openid= user.openid;
        var timestamp = (new Date()).getTime();
        var  userName = user.userName ,telNumber = user.telNumber , address = user.provinceName + user.cityName + user.countryName + user.detailInfo + user.postalCode;
        var ordersPromise = Object.keys(products).map((id)=>{
            var count = products[id];
            return Mysql().getOne("product", {id}).then((product)=>{
                titles.push(`${product.title} * ${count}`)
                fee += product.price * count;

                var order = {product:id, openid, count,nonce, fee: product.price * count, userName, telNumber, address,timestamp};
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
            user.send({type:'payParam', payParam});
        });  //*/
    },
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

}, "product");

export default Product;


