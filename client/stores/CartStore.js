import BaseModel from "./Model";
import BaseStore from "./Store";
import ProductStore from "./ProductStore"

function fromStorage(){
    var key = "cart";
    var val = {};
    if(localStorage[key]) {
        try{
            val = JSON.parse(localStorage[key])
        }catch (e){}
    }
    return val;
}

function toStorage(val){
    var key = "cart";
    localStorage[key] = JSON.stringify(val);
}



var __carts = fromStorage();
class Store extends BaseStore{
    clearCart(){
        __carts = {};
        toStorage(__carts);
        this.emit("change");
    }
    addCart(product){
        if(__carts[product]){
            __carts[product] ++;
        } else{
            __carts[product] = 1;
        }
        toStorage(__carts);
        this.emit("change");
    }
    getCartCount(){
        return Object.values(__carts).reduce((ret, val)=>ret + val , 0);

    }
    getCartProduct(){

        return Object.keys(__carts).map((product)=>ProductStore.get(product));
    }
    getCart(){
        return __carts;
    }
}


var CartStore = new Store();

export default CartStore;