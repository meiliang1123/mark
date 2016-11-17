import EventEmitter from "events";

function _registerEvent(ev){
    let symbol = ev;
    this[`on${ev}`] = (cb)=>{this.on(symbol,cb);};
    this[`remove${ev}`] = (cb)=>this.remove(symbol,cb);
    this[`emit${ev}`] = ()=>{this.emit(symbol)};
}

export class BaseModel extends EventEmitter {
    constructor(events = []){
        super();
        this.data = {};
        events = ["Change", ...events];
        this.registerEvent = _registerEvent.bind(this);
        if( events instanceof Array){
            for (var key in events) this.registerEvent(events[key]);
        }
    }

    set(data){
        this.data = {...this.data, ...data};
        this.emitChange();
        return true;
    }
    get(key){
        if(typeof key == "string")  return this.data[key];
        return this.data;
    }

}


export class BaseFactory extends EventEmitter{
    constructor(events = [], model){
        super();
        this.model = model;
        this.instances = {};
        this.registerEvent = _registerEvent.bind(this);
        if( events instanceof Array){
            for (var key in events) this.registerEvent(events[key]);
        }
    }

    instance(obj){
        let id ;

        if(Number.isInteger(obj)){id = obj; obj = {id};}
        else if(obj instanceof Object) {id = Number.parseInt(obj.id);}
        else {console.log("model param err,not int or obj");return null;}

        if(!this.instances[id]) {
            this.instances[id] = new this.model(obj);
        }
        return this.instances[id];
    }
    set(items) {
        if (! items instanceof Array) {
            items = [items];
        }
        for (var key in items) {
            var item = items[key];
            this.instance(item).set(item);

        }
    }


}

export default {BaseModel, BaseFactory};

