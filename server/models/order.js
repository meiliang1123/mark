import Weixin from "./../classes/weixin"
import Mysql from "./../classes/mysql"
import Model from "./model"

import Product from "./product"


class CombineModel extends Model{
    static table = "combine"
    static keyProp="nonce"
    getOrders(){
        return Order.get({nonce:this.nonce});
    }
    complete(fee, dealno){
        if(this.status == 0){
            this.save({dealno, fee, status:1});
        }
        //do money thing!
    }

}

var Combine = new class  extends Model.Factory{

}(CombineModel)


class OrderModel extends Model{
    static table = "orders"
}
var Order =  new class extends Model.Factory{
    async create(user, products, address){
        var body = "";
        var fee = 0;
        var uid = user.uid;
        var nonce = "" + (new Date()).getTime() + "R" + parseInt(Math.random()*100);

        var ordersPromise = Object.keys(products).map(async (id)=>{
            id = parseInt(id);
            var count = products[id];
            var product = await Product.getByKey(id);
            var provider = await product.getProvider(uid);

            body +=(`${product.title} * ${count}\n`)
            fee += product.price * count;

            var order = {
                product:id,
                uid,
                saler: user.saler,
                provider: provider.uid ? provider.uid : product.provider,
                fee: product.price * count,
                title:product.title,
                count,
                nonce,
            };
            console.log(order);
            this.save(order);
        })


        await Promise.all(ordersPromise);
        Combine.save( {nonce, fee, body, uid, ...address});

        return {nonce, fee, body}

    }
    async getSalerOrderByDate(saler, ymd){
        var date = new Date(ymd);
        var begin = date.getTime();
        var end = date.setDate(date.getDate() +1) && date.getTime();
        var orders = await this.get(`saler=${saler} and nonce>${begin} and nonce<${end}`);
        for(var id in orders.entries()){
            var combine = await Combine.getByKey(orders[id].nonce);
            if(!combine.status){
                orders.delete(id);
            }
        }

        return orders;
    }

}(OrderModel)

Order.Combine = Combine;

export default Order;



