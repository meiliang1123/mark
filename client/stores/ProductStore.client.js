import dispatcher from "../dispatcher";

import Product from "../models/ProductModel";
import User from "./UserStore.client.js"

Product.refresh = function (model){
    var id= model.get("id");
    User.send({action:'product.get', id});

}
Product.easyPay = function(id){
    var products ={};
    products[id] = 1;
    User.send({action:'pay.getPayParam', products});
}

Product.cartPay = function(){
    Product.clearCart();
    User.send({action:'pay.getPayParam', products: Product.getCart()});
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

    },
}, "product");



export default Product;