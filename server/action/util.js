import fs from "fs";
import path from "path";
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

function mkdir(file){
    var dirname = path.dirname(file);
    console.log(dirname);
    try{
        fs.mkdirSync(dirname);
    }catch (e){

        if(e.code == "ENOENT"){
            mkdir(dirname);
            fs.mkdirSync(dirname);
        }

    }


}

class Action{
    jsParam(data,socket){
        Weixin.sns.jsParam(data).then((params)=>{socket.send({ type:"jsParam", ...params, ...data})})
    }
    saveID({serverid}, socket){
        var openid = socket.user.openid;
        var uid = socket.user.uid;
        var name = "idcard.jpg";
        saveWxImg({openid, serverid, name}).then((file)=>{
            Youtu.idcardocr(file, 0, function(data){
                let {name, nation, birth, id, address, sex} = data.data;
                let userinfo = {name, nation, birth, id,address,sex ,  uid, openid};

                name && address
                && socket.send({action:"userinfo",userinfo})
                && Mysql().save("user", userinfo);
            });
        });
    }

    imageWithQR({uid, pic}){

        var promise = Mysql().getOne("user",{uid})
            .then((user)=>{
                var data = {
                    "expire_seconds": 2592000,
                    "action_name": "QR_SCENE",
                    "action_info": {
                        "scene": {scene_id :10000003}
                    }
                }
                if(user && user.isSaler){
                    data.action_info.scene.scene_id = (user.uid);
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
                var main = images(pic).size(640);
                var file = `${__dirname}/../../static/share/${uid}/${pic.split("static/")[1]}`;
                mkdir(path.resolve(file));

                var qrcode = images(Buffer.from(buf,"binary")).size(100,100);
                var size = main.size();
                main.draw(qrcode, size.width - 100, size.height - 100 )

                main.save(file,"jpg",{operation:50} );
                return main.encode("jpg",{operation:50});

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