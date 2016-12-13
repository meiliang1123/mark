import Weixin from "./weixin"
import Mysql from "./mysql"

class Order{
    combinePayed(data){
        //sign check  first to ensure security!!
        var nonce = data.out_trade_no[0],
            dealno = data.transaction_id[0],
            fee = data.total_fee[0];

        Mysql().save("combine", {nonce, dealno, fee})

        Mysql().getOne("combine", {nonce}).then((combine)=>{
            Mysql().get("orders",{nonce}).then((orders)=>{

                orders.map(order=>this.succ({...order, ...combine}));
            })
        })
    }

    create(products, user){
        var titles = [];
        var fee = 0;
        var nonce = "" + (new Date()).getTime() + "R" + parseInt(Math.random()*100);
        var openid= user.openid;
        var  userName = user.userName ,telNumber = user.telNumber , address = user.provinceName + user.cityName + user.countryName + user.detailInfo + user.postalCode;
        var ordersPromise = Object.keys(products).map((id)=>{
            var count = products[id];
            return Mysql().getOne("product", {id}).then((product)=>{
                titles.push(`${product.title} * ${count}`)
                fee += product.price * count;

                var order = {product:id, openid, count,nonce, fee: product.price * count, userName, telNumber, address};
                return Mysql().save("orders", order)
            }).then((ret)=>{
                return Mysql().getOne("orders", {id:ret.insertId})
            })
        })


        return Promise.all(ordersPromise).then(()=>{
            Mysql().save("combine", {nonce, fee, openid, userName, telNumber, address})
            var body = titles.join("\n");
            return {nonce, fee, body}
        });

    }
    succ(order){
        var {provider, saler, openid, fee, userName, telNumber, address, nonce} = order;

        Weixin.cgi.post("/message/template/send",tpl_deliver(provider,{userName, telNumber, address, nonce}))
    }
}

var tpl_deliver = (touser,  { userName, telNumber, address, nonce })=>{
    return {
        touser: touser,
        template_id:'XxCYbUEVEukvlY5NeCNgBx9AV9fyXwF3t3Cg5CdlnEM',
        url:"http://wx.markmeonline.com/#/provider/order",
        data:{
            "first": {
                "value":"您有新的订单需要发货", //title
                "color":"#173177"
            },
            "keyword1":{
                "value":userName, //客户姓名
                "color":"#173177"
            },
            "keyword2": {
                "value":telNumber, //联系电话
                "color":"#173177"
            },
            "keyword3": {
                "value":address, //联系地址
                "color":"#173177"
            },
            "keyword4": {
                "value":(new Date(parseInt(nonce / 100))).toLocaleString(), //订单时间
                "color":"#173177"
            },
            "remark":{
                "value":"请在24小时内发货，如有\n疑问，请跟客户联系！", //备注
                "color":"#173177"
            }
        }
    }
}


export default  new Order();



//
//
//var data =  { appid: [ 'wx5f6db5bf7d4d7ad1' ],
//    bank_type: [ 'CFT' ],
//    cash_fee: [ '3' ],
//    fee_type: [ 'CNY' ],
//    is_subscribe: [ 'Y' ],
//    mch_id: [ '1325577401' ],
//    nonce_str: [ 'mk1479883308959' ],
//    openid: [ 'ou0vGvuFAdFHiWiaS2TybHkGP8QA' ],
//    out_trade_no: [ '147988330895744' ],
//    result_code: [ 'SUCCESS' ],
//    return_code: [ 'SUCCESS' ],
//    sign: [ '6236D38A77432CC5D6C7EC5CD96ED97A' ],
//    time_end: [ '20161123144155' ],
//    total_fee: [ '3' ],
//    trade_type: [ 'JSAPI' ],
//    transaction_id: [ '4000562001201611230583006693' ] };
//dispatcher.dispatch({"type":"orderComplete", data});

