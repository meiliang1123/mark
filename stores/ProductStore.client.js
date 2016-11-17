import dispatcher from "../classes/dispatcher";

import Product from "../models/ProductModel";
import User from "./UserStore.client"

Product.refresh = function (model){
    var id= model.get("id");
    User.send({type:'getProduct', id});

}
Product.getPayParam = function(model){
    var id = model.get("id");
    var openid = User.get("openid");
    User.send({type:'getPayParam', id});
}



dispatcher.Reg({
    product({product}, user){
        Product.set(product);
    },
    payParam({payParam}, user){
        Product.emit("payParam", payParam);
    },
});

export default Product;