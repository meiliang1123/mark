import Mysql from "./classes/mysql";
import Weixin from "./classes/weixin";
import Youtu from "./classes/youtu"
import Order from "./classes/order"



var data =  { appid: [ 'wx5f6db5bf7d4d7ad1' ],
    bank_type: [ 'CFT' ],
    cash_fee: [ '3' ],
    fee_type: [ 'CNY' ],
    is_subscribe: [ 'Y' ],
    mch_id: [ '1325577401' ],
    nonce_str: [ 'mk1479883308959' ],
    openid: [ 'ou0vGvuFAdFHiWiaS2TybHkGP8QA' ],
    out_trade_no: [ '147988330895744' ],
    result_code: [ 'SUCCESS' ],
    return_code: [ 'SUCCESS' ],
    sign: [ '6236D38A77432CC5D6C7EC5CD96ED97A' ],
    time_end: [ '20161123144155' ],
    total_fee: [ '3' ],
    trade_type: [ 'JSAPI' ],
    transaction_id: [ '4000562001201611230583006693' ] };

Order.combinePayed(data);

//var file = "static/idcard.jpg";
//Youtu.idcardocr(file, 0, function(data){
//    delete data.data.frontimage;
//    delete data.data.backimage;
//    console.log((data.data));
//});

//Weixin.getToken().then((token)=>console.log(token));
//
//console.log(new Date().getTime());

//
//
//var data = {"openid":"ou0vGvuFAdFHiWiaS2TybHkGP8QA"};
//
//Mysql().getOne("weixin",data).then(console.log.bind(console));
//name sex nation birth address id


//import Order from "classes/order";
//
//Mysql().getOne("orders", {id:81}).then(
//    (ord)=>Order.succ(ord)
//);




//Weixin.uploadImg(__dirname + "/static/img/icon_nav_actionSheet.png").then((token)=>console.log(token));
//
//var msg = {
//    touser:"ou0vGvuFAdFHiWiaS2TybHkGP8QA",
//    template_id:'XxCYbUEVEukvlY5NeCNgBx9AV9fyXwF3t3Cg5CdlnEM',
//    url:"http://wx.markmeonline.com/",
//    data:{
//        "first": {
//            "value":"恭喜你购买成功！",
//            "color":"#173177"
//        },
//        "keynote1":{
//            "value":"巧克力",
//            "color":"#173177"
//        },
//        "keynote2": {
//            "value":"39.8元",
//            "color":"#173177"
//        },
//        "keynote3": {
//            "value":"2014年9月22日",
//            "color":"#173177"
//        },
//        "remark":{
//            "value":"欢迎再次购买！",
//            "color":"#173177"
//        }
//    }
//};
//Weixin.cgi("/message/template/send",msg).then((resp)=>{
//    console.log(resp,"xxx")
//});

//Weixin.jsParams("aaaa");


//import product from "./classes/product";
//import fs from "fs";
//
//var title = "测试产品 ---", price = 1, id = 3;
//var path = __dirname + `/static/product/${id}/`;
//title += id;
//var data = {title, id, price};
//data = fs.readdirSync(path).reduce((res, file)=>{res["pic" + file.split(".")[0]] = `http://wx.markmeonline.com/product/${id}/${file}`; return res;},data);
//Mysql().save("product",data);


//let body = "测试订单",
//    out_trade_no = (new Date()).getTime(),
//    total_fee = 100,
//    openid = "ou0vGvuFAdFHiWiaS2TybHkGP8QA";
//
//Weixin.payParams({body, out_trade_no, total_fee, openid}).then((params)=>{
//    console.log(params);
//});



//Mysql().save("product",{title, price}).then((ret)=>{
//    id = ret.insertId;
//
//})
