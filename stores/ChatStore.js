import dispatcher from "../classes/dispatcher";
import EventEmitter from "events";



export default class Store extends EventEmitter {
    static getUserChat(){
        return [{txt:"不知道要说啥"}];
    }
};

Store.dispatchToken = dispatcher.register((action)=>{
    switch(action.type){

    }
});



