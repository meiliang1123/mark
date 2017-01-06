import Address from "./../models/address"
import User from "./../models/user"

class Action{
    async get(data, socket){
        var addrs = await Address.get({...data,uid:socket.user.uid});
        socket.send({action:"address", address:addrs.json()})
    }
    async save({address}, socket){

        var id = await Address.save({...address, uid:socket.user.uid});
        var user = socket.user;

        //if(!user.defaultAddressId){
            user.save({defaultAddressId:id})
        //}

        this.get({},socket);
    }
}

export default new Action();