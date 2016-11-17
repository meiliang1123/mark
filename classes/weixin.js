
import https from "https";
import {Buffer} from "buffer";
import querystring from "querystring";
import fs from "fs";
import md5 from "md5";
import xml from "xml";
import {parseString} from "xml2js";

var FormData = require('form-data');

import config from "../config/weixin";

let _apiUrl = 'api.weixin.qq.com';
let _payUrl = "api.mch.weixin.qq.com";



function request({method='GET', postData = {}, path,  url,  ...bak}){
    var options = {
        host: url,
        path:  path,
        method: method,
        protocol: "https:"
    };
    var form = new FormData();
    for( var key in postData){
       form.append(key, postData[key]);
    }
    return new Promise(function(resolve,reject){
        form.submit(options, (err, res) => {
            res.setEncoding('utf8');
            res.on('data', resolve);
        });
    })

}

function sign(data, key){
    var keys = Object.keys(data).sort();
    var arr = [];
    for (var idx in keys){
        var k = keys[idx];
        arr.push(`${k}=${data[k]}`);
    }
    arr.push(`key=${key}`);
    //console.log(arr.join("&"));
    return md5(arr.join("&"));
}

export default {
    getToken(){ //not safe when token file not exists
        return new Promise((resolve)=>{
            let tokenfile = __dirname + "/../config/token.json";

            let chunk = fs.readFileSync(tokenfile,{encoding:"utf8"});
            let {expires, access_token, } = JSON.parse(chunk);

            if(expires > new Date().getTime()) {
                console.log("local");
                resolve(access_token);
                return;
            }

            let url = _apiUrl,
                path = `/cgi-bin/token?grant_type=client_credential&appid=${config.appid}&secret=${config.secret}`;
            request({url, path}).then((chunk)=>{
                let json = JSON.parse(chunk);
                json.expires = new Date().getTime()  + json.expires_in * 1000;
                fs.writeFile(tokenfile,JSON.stringify(json));
                console.log("web")
                resolve(json.access_token);
            });
        }).catch(e=>{console.log(e)});
    },
    uploadImg(file){
        return this.getToken().then((access_token)=>{
            let method = "POST",
                url = _apiUrl,
                path = `/cgi-bin/media/uploadimg?access_token=${access_token}`,
                postData = {};

            postData.media =  fs.createReadStream(file);
            return request({url, method, path, postData}).then(JSON.parse);
        })
    },

    clienToken({code}){
        let appid = config.appid,
            secret = config.secret,
            grant_type = "authorization_code",
            url = _apiUrl,
            path = "/sns/oauth2/access_token?" + querystring.stringify({appid,secret,code, grant_type});
        return request({url,path}).then((data)=> JSON.parse(data));
    },
    clientUserInfo({openid,access_token,...args}){
        let lang="zh_CN",
            url = _apiUrl,
            path = "/sns/userinfo?" + querystring.stringify({access_token,openid,lang});
        return request({url,path}).then((data)=>JSON.parse(data));
    },
    prepayId({body, out_trade_no, total_fee, openid }){
        let appid = config.appid,
            mch_id = config.mch_id,
            nonce_str = "mk" + (new Date()).getTime(),
            spbill_create_ip = "120.77.61.87",
            notify_url = "http://wx.markmeonline.com/weixin/callback",
            trade_type = "JSAPI",
            path = "/pay/unifiedorder",
            url = _payUrl,
            obj = {};
        var key = config.pay_key;
        obj = {appid, mch_id, nonce_str, spbill_create_ip, notify_url, trade_type,body, out_trade_no, total_fee, openid }
        obj.sign = sign(obj,key);
        var arr4xml = [];
        for(var key in obj){
            var o = {};
            o[key] = obj[key];
            arr4xml.push(o)
        }
        var postData = xml([{xml:arr4xml}]);
        //console.log(postData)
        var options = {
            host: url,
            path:  path,
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        console.log(obj);
        return new Promise(function(resolve){
            var req = https.request(options, (res)=>{
                res.setEncoding("utf8");

                res.on("data",(xml)=>{
                    console.log(xml, "getData");
                    parseString(xml,(err, data)=>{
                        console.log(err);
                        resolve(data.xml.prepay_id[0])
                    })
                });
            })
            req.write(postData);
            req.end();
        });
    },
    payParams(args){
        return this.prepayId(args).then((prepay_id)=>{
            var params = {
                appId : config.appid,
                timeStamp : "" + parseInt((new Date()).getTime() / 1000),
                nonceStr : "mk" + (new Date()).getTime(),
                package : `prepay_id=${prepay_id}`,
                signType : 'MD5'
            }
            params.paySign = sign(params, config.pay_key);
            console.log(prepay_id, "class");
            return params;
        })

    }

}


