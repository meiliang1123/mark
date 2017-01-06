import Mysql from "./../classes/mysql";
import Model from "./model"
class ProductModel extends Model{
    static table = "product"
    getProvider(buyer){
        var {category, id} = this.data;
        var where = {prdid:id};
        if(category){
            where = {category};
        }

        return Mysql().get("provider", where).then(providers=>{
            if(providers.length == 0) return {};
            if(providers.length == 1) return providers[0];
            var depth = 0;
            return (function traceSaler(uid){
                if(depth++) return providers[0];
                return Mysql().getOne("user", {uid}).then((user=>{

                    var provider =  providers.find(provider=>provider.uid == user.saler)
                    if(provider) return provider;

                    return traceSaler(user.saler)
                }))
            })(buyer)
       })

    }
}

var Product = new class extends Model.Factory{
    
}(ProductModel)

export default Product;
