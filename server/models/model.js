import EventEmitter from "events";
import Mysql from "../classes/mysql"

Map.prototype.json = function(){
        var ret = {};
        this.forEach((val,key)=>{
          ret[key] = val.data;
        })
        return ret;
    }


class Model extends EventEmitter {
    static keyProp = "id"
    static table = false
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
        return this;
    }
    save(data){
        this.set(data);
        Mysql().save(this.constructor.table, {...this._data,...data });
    }

}


class Factory extends EventEmitter{
    map = new Map()
    constructor(model){
        super();
        this.model = model;
        if(!model.table) console.error("create a Factory without a table name");
        model.factory = this;
    }
    getOne(data){
        return Mysql().getOne(this.model.table, data).then(row=>{
            this.set(row);
            return this.map.get(row[this.model.keyProp])
        });
    }
    getByKey(key){

        if(this.map.get(key)) {
            return this.map.get(key);
        }
        return Mysql().getOne(this.model.table, {[this.model.keyProp]:key}).then(row=>{
            this.set(row);
            return this.map.get(key)
        });
    }
    get(data){

        return Mysql().get(this.model.table, data).then(rows=>{
            var ret = new Map();
            rows.map(row=>{
                this.set(row)
                ret.set(row[this.model.keyProp], this.map.get(row[this.model.keyProp]));
            })
            return ret;
        });
    }
    set(model){
        var old = this.map.get(model[this.model.keyProp]);
        if(! (model instanceof this.model)){
            model = new this.model(model);
        }

        if(old){
            old.set(model.data);
        } else{
            this.map.set(model[this.model.keyProp], model)
        }
    }
    async save(data){
        var ret = await Mysql().save(this.model.table, data);
        return ret.insertId || data[this.model.keyProp];
    }


}

Model.Factory = Factory;

export default Model;




