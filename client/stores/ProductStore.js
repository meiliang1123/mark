import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import CartStore from "./CartStore";
import UserStore from "./UserStore.js"



class Model extends BaseModel {
}



class Store extends BaseStore
{

    refresh(model){
        var id= model.id;
        UserStore.send({action:'product.get', id});

    }
    easyPay(id){
        var products ={};
        products[id] = 1;
        UserStore.send({action:'pay.getPayParam', products});
    }

    cartPay(){

        UserStore.send({action:'pay.getPayParam', products: CartStore.getCart()});
        CartStore.clearCart();
    }


}

var ProductStore = new Store(Model);
export default ProductStore;

//UserStore.on("login",()=>{UserStore.send({action:"product.get"})})



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



