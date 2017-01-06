import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import UserStore from "./UserStore.js"
import WeixinStore from "./WeixinStore"


class Model extends BaseModel {
    get text(){
        var {city, detail, name, tel, postal} = this._data
        return name ? `${city} ${detail} ${postal} ${name} ${tel}`: "没有地址信息，点击编辑";
    }
    isValid(){
        var {city, detail, name, tel, postal} = this._data
        return city && detail && name && tel && postal;
    }
}



class Store extends BaseStore
{
    _current = new Model();
    refresh(model){
        UserStore.send({action:"address.get", id:model.id});
    }
    current(){
        return this._current;
    }

    async getWeixinAddress(){
        let {userName, postalCode , provinceName , cityName  , countryName , detailInfo, nationalCode , telNumber}
            = await WeixinStore.openAddress()
        var addr = {city:`${provinceName} ${cityName} ${countryName} `, postal:postalCode, name:userName, detail:detailInfo, tel:telNumber}

        this.setCurrent(new Model(addr));
    }
    setCurrent(data){
        if(data instanceof Model)this._current = (data);
        else this._current.set(data);

        this.emit("change");
    }
    resetCurrent(){
        var {city, detail, name, tel, postal} = {};
        this.setCurrent(new Model({city, detail, name, tel, postal}));
    }
    saveCurrent(){
        UserStore.send({action:"address.save", address:this._current.data});
    }

}

var AddressStore = new Store(Model);
export default AddressStore;

UserStore.send({action:"address.get"});


dispatcher.Reg({
    address({address}){
        AddressStore.set(address);
    },
    loginSucc({userinfo}){
        if(userinfo.defaultAddressId){
            AddressStore.setCurrent(AddressStore.get(userinfo.defaultAddressId))
        }

    }

}, "provider");



