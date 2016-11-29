import dispatcher from "../client/dispatcher";

import Product from "../models/ProductModel";
import User from "./UserStore.client.js"

Product.refresh = function (model){
    var id= model.get("id");
    User.send({type:'getProduct', id});

}
Product.easyPay = function(id){
    var products ={};
    products[id] = 1;
    User.send({type:'getPayParam', products});
}

Product.cartPay = function(){
    Product.clearCart();
    User.send({type:'getPayParam', products: Product.getCart()});
}

dispatcher.Reg({
    product({product}, user){
        Product.set(product);
    },
    payParam({payParam}, user){
        //Product.emit("payParam", payParam);
        var data = payParam;
        data.timestamp = data.timeStamp;
        console.log(data);
        wx.ready(()=>{
            wx.chooseWXPay({
                ...data,
                success:()=>{
                    console.log("aa")
                }
        })})
        //function onBridgeReady(){
        //    WeixinJSBridge.invoke(
        //        'getBrandWCPayRequest', data,
        //        function(res){
        //            if(res.err_msg == "get_brand_wcpay_request：ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        //        }
        //    );
        //}
        //if (typeof WeixinJSBridge == "undefined"){
        //    if( document.addEventListener ){
        //        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        //    }else if (document.attachEvent){
        //        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        //        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        //    }
        //}else{
        //    onBridgeReady();
        //}
    },
}, "product");



export default Product;