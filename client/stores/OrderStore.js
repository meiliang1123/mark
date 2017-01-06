import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import UserStore from "./UserStore.js"

var _combines = [];


class Model extends BaseModel {
}



class Store extends BaseStore
{




}

var OrderStore = new Store(Model);
export default OrderStore;

//UserStore.on("login",()=>{
//    UserStore.send({action:"order.getMyOrder"})
//})



dispatcher.Reg({
    combines({combines}){
        _combines = combines;
    },
    orders({orders}){

        OrderStore.set(orders);
    }
}, "order");



