import Weixin from "./../classes/weixin"
import Mysql from "./../classes/mysql"
import Model from "./model"

import Product from "./product"


class CombineModel extends Model{
    static table = "combine"
    getOrders(){
        return Order.get({nonce:this.nonce});
    }
    complete(fee, dealno){
        if(this.status == 0){
            this.save({dealno, fee, status:1});
        }
    }

}

var Combine = new class  extends Model.Factory{

}(CombineModel)
