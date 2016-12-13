import Order from "./order"
import {parseString} from "xml2js";

var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/",function(req,res,next){
    res.sendFile(path.join(__dirname, '../../static', 'index.html'));
})

router.get("/weixin",function(req, res, next){
    res.send(req.query.echostr);
})

router.post("/weixin",function(req, res, next){
    var msg = req.body;

    parseString(msg,(err, data)=>{
        try{
            require("./wxdeliver.js")(data);
        }catch (e){console.log(e)}

    });
    res.send("success");

})

router.get("/img/coop/:uid", function(req, res, next){
    var {uid} = req.params;
    res.writeHead('200', {'Content-Type': 'image/jpeg'});
    var action = require("../action/util");

    try{

        action.default.markmeWithCoop({uid}).then(buf=>{
            res.end(buf, "binary");
        })


    }catch (e){
        console.log(e);
    }
})

router.get("/share/:uid-:pid-:name", function(req, res, next){
    var {uid, pid, name} = req.params;
    res.writeHead('200', {'Content-Type': 'image/jpeg'});
    var action = require("../action/util");

    var  pic = __dirname + `/../../static/product/${pid}/${name}.jpg`;

    try{
        console.log(pic);
        action.default.imageWithQR({uid, pic}).then(buf=>{
            res.end(buf, "binary");
        })


    }catch (e){
        console.log(e);
    }

})

router.all("/weixin/callback", function(req, res, next){

    parseString(req.body,(err, data)=>{
        Order.combinePayed(data.xml);
        res.set('Content-Type', 'text/xml');
        res.send("<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>");
    })
})

module.exports = router;


