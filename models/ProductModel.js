import {BaseModel, BaseFactory} from "./BaseModel";




var __mEvents = ["Change"];
class Model extends BaseModel {
    constructor(data){
        super(__mEvents);
        this.set(data);
    }

}


var __fEvents = [];
class FProduct extends BaseFactory
{
    constructor(){
        super(__fEvents, Model);
    }
}

var fac = new FProduct();
fac.mEvents = __mEvents;
fac.fEvents = __fEvents;

export default fac;