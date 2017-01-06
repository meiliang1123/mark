import Mysql from "./../classes/mysql"
import Model from "./model"

class MoneyModel extends Model{
    static table = "money"
}

var Money  = new class extends Model.Factory{

}(MoneyModel)

export default Money;


