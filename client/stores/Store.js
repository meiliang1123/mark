import EventEmitter from "events";

export default class Store extends EventEmitter{
    constructor(model,key = "id"){
        super();
        this.model = model;
        this.keyProp = key;
        this.instances = {};


    }

    instance(obj){
        let id ;

        if(Number.isInteger(obj) || typeof obj == "string"){id = obj; obj = {[this.keyProp]:id};}
        else if(obj instanceof Object) {id = (obj[this.keyProp]);}
        else {console.log("model param err,not int or obj");return null;}

        if(!this.instances[id]) {
            this.instances[id] = new this.model(obj);
        }else{
            this.instances[id].set(obj);
        }

        return this.instances[id];
    }
    set(items) {
        if (! (items instanceof Array)) {
            items = [items];
        }

        for (var key in items) {
            var item = items[key];
            this.instance(item).set(item);
        }

        this.emit("change");
    }
    get(id){
        if(id) return this.instances[id];
        return this.instances;
    }


}
