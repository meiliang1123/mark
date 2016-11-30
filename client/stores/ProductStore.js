import dispatcher from "../dispatcher";
import User from "./UserStore.js"

import BaseModel from "./Model";
import BaseStore from "./Store";




class Model extends BaseModel {
}



class Store extends BaseStore
{
    refresh(model){
        var id= model.id;
        User.send({action:'product.get', id});

    }
    easyPay(id){
        var products ={};
        products[id] = 1;
        User.send({action:'pay.getPayParam', products});
    }

    cartPay(){
        Product.clearCart();
        User.send({action:'pay.getPayParam', products: Product.getCart()});
    }





}

var ProductStore = new Store(Model);
export default ProductStore;





dispatcher.Reg({
    product({product}, user){
        ProductStore.set(product);
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



