import fs from "fs";
import https from "https";
import http from "http";
import Weixin from "../classes/weixin";
import Mysql from "../classes/mysql"
import Youtu from "../classes/youtu";
var images = require("images");

function saveWxImg({openid, serverid, name}){

    var path = `profile/${openid}`;
    fs.existsSync(path) || fs.mkdirSync(path);
    var _dst = `profile/${openid}/${name}`;
    return Weixin.cgi.saveImg(serverid, _dst).then(()=>_dst);
}

class Action{
    jsParam(data,socket){
        Weixin.sns.jsParam(data).then((params)=>{socket.send({ type:"jsParam", ...params, ...data})})
    }
    saveID({serverid}, socket){
        var openid = socket.user.openid;
        var name = "idcard.jpg";
        saveWxImg({openid, serverid, name}).then((file)=>{
            Youtu.idcardocr(file, 0, function(data){
                let {name, nation, birth, id, address, sex} = data.data;
                let userinfo = {name, nation, birth, id,address,sex ,  openid};

                name && address
                && socket.send({action:"userinfo",userinfo})
                && Mysql().save("user", userinfo);
            });
        });
    }

    imageWithQR({openid, pic}){

        var promise = Mysql().getOne("user",{openid})
            .then((user)=>{
                var data = {
                    "expire_seconds": 2592000,
                    "action_name": "QR_SCENE",
                    "action_info": {
                        "scene": {scene_id :10000003}
                    }
                }
                if(user && user.isSaler){
                    data.scene.scene_id = (user.uid);
                }
                return data;
            })
            .then(data=>{
                return Weixin.cgi.post("/qrcode/create",data);
            })
            .then(ret=>{
                var prefix = "https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=";
                var url = prefix + ret.ticket;
                var filename = "";
                return new Promise((resolve)=>{https.get(url,res=>{
                    var imgData = "";
                    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
                    res.on("data", function(chunk){
                        imgData+=chunk;
                    });

                    res.on("end", function(){
                        resolve(imgData);
                    });

                })});
            })
            .then(buf=>{
                var main = images(pic);
                var qrcode = images(Buffer.from(buf,"binary")).size(100,100);
                var size = main.size();
                main.draw(qrcode, size.width - 100, size.height - 100 )
                return main.encode("jpg");
            }).catch(e=>{console.log(e)})

        return promise;
    }

    markmeWithCoop({uid}){
        var promise = Mysql().getOne("user",{uid})
            .then(({headimgurl})=>{
                return new Promise((resolve)=>{http.get(headimgurl,res=>{
                    var imgData = "";
                    res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
                    res.on("data", function(chunk){
                        imgData+=chunk;
                    });

                    res.on("end", function(){
                        resolve(imgData);
                    });

                })});
            })
            .then(buf=>{

                var logo = images(__dirname + `/../../static/img/logo-square.png`).size(400, 400);
                var headimg = images(Buffer.from(buf,"binary")).size(400,400);
                var main = images(900, 600).fill(0xff, 0xff,0xff)
                main.draw(logo, 0,0 ).draw(headimg,450,50);
                return main.encode("jpg");
            }).catch(e=>{console.log(e)})
        return promise;
    }

}

export default new Action();