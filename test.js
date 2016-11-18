import Mysql from "./classes/mysql";
import weixin from "./classes/weixin";


//weixin.getToken().then((token)=>console.log(token));
//
//console.log(new Date().getTime());

//
//
//var data = {"openid":"ou0vGvuFAdFHiWiaS2TybHkGP8QA"};
//
//Mysql().getOne("weixin",data).then(console.log.bind(console));




//import weixin from "./classes/weixin";
//
//weixin.uploadImg("/../assets/img/icon_nav_actionSheet.png").then((token)=>console.log(token));


import product from "./classes/product";
import fs from "fs";

var title = "测试产品 ---", price = 1, id = 3;
var path = __dirname + `/assets/product/${id}/`;
title += id;
var data = {title, id, price};
data = fs.readdirSync(path).reduce((res, file)=>{res["pic" + file.split(".")[0]] = `http://wx.markmeonline.com/product/${id}/${file}`; return res;},data);
Mysql().save("product",data);


//let body = "测试订单",
//    out_trade_no = (new Date()).getTime(),
//    total_fee = 100,
//    openid = "ou0vGvuFAdFHiWiaS2TybHkGP8QA";
//
//weixin.payParams({body, out_trade_no, total_fee, openid}).then((params)=>{
//    console.log(params);
//});



//Mysql().save("product",{title, price}).then((ret)=>{
//    id = ret.insertId;
//
//})
