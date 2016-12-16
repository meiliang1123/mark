import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import UserStore from "./UserStore.js"

var _combines = [];



class Store extends BaseStore
{
    agent(action, reg, callback){
        var act = {};
        act[reg] = callback;
        dispatcher.Reg(act);
        UserStore.send(action);
    }
}

var MassStore = new Store(BaseModel);
export default MassStore;
