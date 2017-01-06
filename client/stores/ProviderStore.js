import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import UserStore from "./UserStore.js"



class Model extends BaseModel {
}



class Store extends BaseStore
{

    isHK(){
        return !! this.filter({category:"hk"}).length;
    }

}

var ProviderStore = new Store(Model);
export default ProviderStore;



//UserStore.on("login",()=>UserStore.send({action:"provider.get"}));

dispatcher.Reg({
    provider({provider}){
        ProviderStore.set(provider);
    },

}, "provider");



