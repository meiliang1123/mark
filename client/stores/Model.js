import EventEmitter from "events";

export default class Model extends EventEmitter {
    _data = {}
    constructor(data = {}){
        super();
        this._data = data;
        Object.keys(data).map((key)=>{Reflect.defineProperty(this, key, {get: function() { return this.data[key]; },})})
    }
    get data(){
        return this._data;
    }
    set(data){
        var changed = false;
        Object.keys(data).map((key)=>{
            Reflect.defineProperty(this, key, {get: function() { return this.data[key]; },})
            if(this._data[key] != data[key]) changed = true;
        })
        this._data = {...this._data, ...data}
        if(changed) this.emit("change");
        return true;
    }
}



