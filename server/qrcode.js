import Weixin from "./classes/weixin"
import fs from "fs"

var data = {
    "expire_seconds": 2592000,
    "action_name": "QR_SCENE",
    "action_info": {
        "scene": {"scene_id": 123}
    }
}


Weixin.cgi.post("/qrcode/create",data)
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
                fs.writeFile(filename, imgData, { encoding :"binary", flag:"w+"}, function(err){
                    if(!err){
                        resolve(filename);
                    }
                });
            });

        })});
    });