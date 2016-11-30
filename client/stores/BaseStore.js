import EventEmitter from "events";

export default class Store extends EventEmitter{
    constructor( model){
        super();
        this.model = model;
        this.keyProp = "id";
        this.instances = {};


    }

    instance(obj){
        let id ;

        if(Number.isInteger(obj)){id = obj; obj = {id};}
        else if(obj instanceof Object) {id = Number.parseInt(obj[this.keyProp]);}
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

        this.emit("change");
    }
    get(id){
        if(id) return this.instances[id];
        return this.instances;
    }


}
