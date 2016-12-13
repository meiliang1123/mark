
import https from "https";
import {Buffer} from "buffer";
import querystring from "querystring";
import fs from "fs";
import md5 from "md5";
import xml from "xml";
import {parseString} from "xml2js";

var FormData = require('form-data');

import config from "../config/weixin";

let _apiHost = 'api.weixin.qq.com';
let _payHost = "api.mch.weixin.qq.com";



function request({method='GET', postData = {}, path,  host}){
    var options = {
        host,
        path,
        method,
        protocol: "https:",
    };

    return new Promise(function(resolve,reject){
        var cb = (err, res) => {
            if(!res) res = err;
            res.setEncoding('utf8');
            res.on('data', (data)=>{ console.log(data); resolve(data);});
        }
        var doForm = false;
        var form = new FormData();
        console.log(postData);
        for( var key in postData){
            var val = postData[key];
            if(val && !!val.on){
                doForm = true;
                form.append(key,val);
            };

        }

        if(doForm)
            form.submit(options, cb);
        else {
            var qs= JSON.stringify(postData);
            options.headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(qs)
            }
            var req = https.request(options,cb);
            req.write(qs);
            req.end();
        }
    }).catch((e)=>{console.log(e)})

}

function sign(data, key){
    var keys = Object.keys(data).sort();
    var arr = [];
    for (var idx in keys){
        var k = keys[idx];
        arr.push(`${k}=${data[k]}`);
    }
    arr.push(`key=${key}`);
    return md5(arr.join("&"));
}

function jsonDecode(str){
    var ret = {};
    try{
        ret = JSON.parse(str);
    }catch (e){
        console.log(e,"---" ,str,  "jsonDecode err");
    };
    return ret;
}

var sns = {

    clienToken({code}){
        let appid = config.appid,
            secret = config.secret,
            grant_type = "authorization_code",
            host = _apiHost,
            path = "/sns/oauth2/access_token?" + querystring.stringify({appid,secret,code, grant_type});
        return request({host,path}).then((data)=> jsonDecode(data));
    },
    clientUserInfo({openid,access_token,...args}){
        let lang="zh_CN",
            host = _apiHost,
            path = "/sns/userinfo?" + querystring.stringify({access_token,openid,lang});
        return request({host,path})
            .then((data)=>{
                var ret = jsonDecode(data);
                if(ret.sex == 1) ret.sex = "男";
                if(ret.sex == 2) ret.sex = "女";
                return ret;
            });
    },
    getTicket(){
        return new Promise((resolve)=>{
            var json;
            let file = __dirname + "/../config/jsticket.json";
            let {expires, ticket, } = json = jsonDecode(fs.readFileSync(file,{encoding:"utf8"}));
            if(expires > new Date().getTime()) {
                console.log("local");
                resolve(ticket);
                return;
            }

            var path=`/ticket/getticket?type=jsapi`;
            cgi.get({path}).then((json)=>{

                json.expires = new Date().getTime()  + json.expires_in * 1000;
                console.log(json);
                fs.writeFile(file,JSON.stringify(json));
                console.log("web")
                resolve(json.ticket)
            });
        })


    },

    jsParam({client_url}){


        return this.getTicket().then((ticket)=>{
            var params = {
                appId : config.appid,
                timestamp : "" + parseInt((new Date()).getTime() / 1000),
                nonceStr : "mk" + (new Date()).getTime(),
            }
            params.signature = require("sha1")(`jsapi_ticket=${ticket}&noncestr=${params.nonceStr}&timestamp=${params.timestamp}&url=${client_url}`);
            return params;
        })
    },
}

var cgi = {
    post(mod,postData){

        return this.getToken().then((access_token)=>{
            let method = "POST",
                host = _apiHost,
                path = `/cgi-bin${mod}?access_token=${access_token}`;
            return request({host, method, path, postData}).then(jsonDecode);
        })
    },
    get({path}){
        return this.getToken().then((access_token)=>{
            let host = _apiHost;
            path = `/cgi-bin${path}&access_token=${access_token}`;
            console.log(path, "in cgi get");
            return request({host, path}).then(jsonDecode);
        })
    },

    getToken(){ //not safe when token file not exists
        return new Promise((resolve)=>{
            let file = __dirname + "/../config/token.json";

            let {expires, access_token, } =  jsonDecode(fs.readFileSync(file,{encoding:"utf8"}));;

            if(expires > new Date().getTime()) {
                console.log("local");
                resolve(access_token);
                return;
            }

            let host = _apiHost,
                path = `/cgi-bin/token?grant_type=client_credential&appid=${config.appid}&secret=${config.secret}`;
            request({host, path}).then((chunk)=>{
                let json = jsonDecode(chunk);
                json.expires = new Date().getTime()  + json.expires_in * 1000;
                fs.writeFile(file,JSON.stringify(json));
                console.log("web")
                resolve(json.access_token);
            });
        }).catch(e=>{console.log(e)});
    },
    uploadImg(file){
        return this.getToken().then((access_token)=>{
            let method = "POST",
                host = _apiHost,
                path = `/cgi-bin/media/uploadimg?access_token=${access_token}`,
                postData = {};

            postData.media =  fs.createReadStream(file);
            return request({host, method, path, postData}).then(jsonDecode);
        })
    },
    saveImg(media_id, filename){
        return this.getToken().then((access_token)=>{
            let url = `https://${_apiHost}/cgi-bin/media/get?access_token=${access_token}&media_id=${media_id}`;
            return new Promise((resolve)=>{https.get(url,res=>{
                var imgData = "";
                res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
                res.on("data", function(chunk){
                    imgData+=chunk;
                });

                res.on("end", function(){
                    fs.writeFile(filename, imgData, { encoding :"binary", flag:"w+"}, function(err){
                        if(!err){
                            resolve(filename);
                        }
                    });
                });

            })});
        })
    }


}

var pay = {
    prepayId({body, out_trade_no, total_fee, openid }){
        let appid = config.appid,
            mch_id = config.mch_id,
            nonce_str = "mk" + (new Date()).getTime(),
            spbill_create_ip = "120.77.61.87",
            notify_url = "http://wx.markmeonline.com/weixin/callback",
            trade_type = "JSAPI",
            path = "/pay/unifiedorder",
            host = _payHost,
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
            host: _payHost,
            path:  path,
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        console.log(obj,"before send");
        return new Promise(function(resolve){
            var req = https.request(options, (res)=>{
               if(res.headers["content-length"] == 0){
                   console.log("returned nothing with request data:", postData)
               }
                res.setEncoding("utf8");
                res.on("data",(xml)=>{
                    console.log(xml, "getData");
                    parseString(xml,(err, data)=>{
                        resolve(data.xml.prepay_id[0])
                    })
                });
            })
            req.write(postData);
            req.end();
        });
    },
    payParam(args){
        return this.prepayId(args).then((prepay_id)=>{
            var param = {
                appId : config.appid,
                timeStamp : "" + parseInt((new Date()).getTime() / 1000),
                nonceStr : "mk" + (new Date()).getTime(),
                package : `prepay_id=${prepay_id}`,
                signType : 'MD5'
            }
            param.paySign = sign(param, config.pay_key);
            return param;
        })
    },
}



export default { sns, cgi, pay }


