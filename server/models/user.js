import Mysql from "./../classes/mysql"
import Model from "./model"


class UserModel extends Model{
    static table = "user"
    static keyProp = "uid"
    baseinfo(){
        var {nickname, headimgurl, userName, trust, } = this._data;
        return {nickname, headimgurl, userName, trust, };
    }
}

var User = new class extends Model.Factory{
    getByOpenid(openid){
        return this.getOne({openid});
    }
}(UserModel)


export default User;