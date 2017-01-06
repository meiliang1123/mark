import Mysql from "./../classes/mysql"
import Model from "./model"

class AddressModel extends Model{
    static table = "address"
}

var Address  = new class extends Model.Factory{

}(AddressModel)

export default Address;


