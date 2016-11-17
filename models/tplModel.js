import {BaseModel, BaseFactory} from "./BaseModel";




var __mEvents = [];
class Model extends BaseModel {
    constructor(data){
        super(__mEvents);
        this.set(data);
    }

}


var __fEvents = [];
class Factory extends BaseFactory
{
    constructor(){
        super(__fEvents, Model);
    }

}

var fac = new Factory();
fac.mEvents = __mEvents;
fac.fEvents = __fEvents;

export default fac;