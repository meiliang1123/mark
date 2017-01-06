import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import UserStore from "./UserStore.js"

var _combines = [];



class Store extends BaseStore
{
    agent(action,callback){
        var reg = action.action;
        var act = {};
        act[reg] = callback;
        dispatcher.Reg(act,reg);
        UserStore.send(action);
    }
}

var MassStore = new Store(BaseModel);
export default MassStore;
