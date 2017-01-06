import EventEmitter from "events";

export default class Model extends EventEmitter {
    static keyProp = "id"
    _data = {}
    constructor(data = {}){
        super();
        this._data = data;
        Object.keys(data).map((key)=>{Reflect.defineProperty(this, key, {get: ()=> this._data[key] || ""})})
    }
    get data(){
        return this._data;
    }
    set(data){

        var changed = false;
        var count = 0;
        if(data instanceof this.constructor){
            console.trace();
            data = data._data
        }
        Object.keys(data).map((key)=>{
            Reflect.defineProperty(this, key, {get: ()=> this._data[key] || ""})
            if(this._data[key] != data[key]) changed = true;
            count++;
        })
        this._data = {...this._data, ...data}
        if(changed || count > 2) this.emit("change");
        return true;
    }
}



