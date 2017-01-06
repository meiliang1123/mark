import Mysql from "../classes/mysql";

class Action{
    get(data, user){
        Mysql().get("product", data).then((product)=>{
            user.send({type:'product', product});
        });
    }

}

export default new Action();