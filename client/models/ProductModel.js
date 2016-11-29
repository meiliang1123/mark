import {BaseModel, BaseFactory} from "./BaseModel";




var __mEvents = ["Change"];
class Model extends BaseModel {
    constructor(data){
        super(__mEvents);
        this.set(data);
    }

}

var __carts = {};

var __fEvents = ["Cart"];
class Factory extends BaseFactory
{
    constructor(){
        super(__fEvents, Model);
    }
    clearCart(){
        __carts = {};
        this.emitCart();
    }
    addCart(product){
        if(__carts[product]){
            __carts[product] ++;
        } else{
            __carts[product] = 1;
        }
        this.emitCart();
    }
    getCartCount(){
        return Object.values(__carts).reduce((ret, val)=>ret + val , 0);

    }
    getCartProduct(){

        return Object.keys(__carts).map((product)=>this.get(product));
    }
    getCart(){
        return __carts;
    }


}



var fac = new Factory();



fac.mEvents = __mEvents;
fac.fEvents = __fEvents;

export default fac;