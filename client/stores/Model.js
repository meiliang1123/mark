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
        this._data = {...this._data, ...data};
        Object.keys(data).map((key)=>{Reflect.defineProperty(this, key, {get: function() { return this.data[key]; },})})
        this.emit("change");
        return true;
    }
}



