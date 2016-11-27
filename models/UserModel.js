import {BaseModel, BaseFactory} from "./BaseModel";


var __mEvents = ["Login"];
class Model extends BaseModel {
    constructor(socket){
        var data = {};
        super(__mEvents);
        this.set(data);
        this.socket = socket;
    }
    send(action){
        console.log("user send", action);
        this.socket.emit("action", action);
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