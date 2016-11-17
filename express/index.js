import {parseString} from "xml2js";

var express = require("express");
var path = require("path");
var router = express.Router();

router.get("/",function(req,res,next){
    res.sendFile(path.join(__dirname, '../assets', 'index.html'));
})

router.get("/weixin",function(req, res, next){
    res.send(req.query.echostr);
})

router.all("/weixin/callback", function(req, res, next){

    parseString(req.body,(err, data)=>{
        console.log(data.xml);
        res.set('Content-Type', 'text/xml');
        res.send("<xml><return_code><![CDATA[SUCCESS]]></return_code><return_msg><![CDATA[OK]]></return_msg></xml>");
    })
})

module.exports = router;


