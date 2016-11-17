import dispatcher from "../classes/dispatcher";
import Mysql from "../classes/mysql";
import Product from "../models/ProductModel";
import weixin from "../classes/weixin";

dispatcher.Reg({
    getProduct(data, user){
        Mysql().get("product", data).then((product)=>{
            user.send({type:'product', product});
        });
    },
    getPayParam({id}, user){
        var openid = user.get("openid");
        Mysql().getOne("product", {id}).then((product)=>{
            let body = product.title,
                out_trade_no = (new Date()).getTime(),
                total_fee = product.price;
            console.log(product, "xxx");
            weixin.payParams({body, out_trade_no, total_fee, openid}).then((payParam)=>{
                console.log(payParam, "xxx");
                user.send({type:'payParam', payParam});
            });
        });
    }
});

export default Product;