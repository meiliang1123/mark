import fs from "fs";
import Weixin from "../classes/weixin";
import Mysql from "../classes/mysql"
import Youtu from "../classes/youtu";

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

}

export default new Action();