import Weixin from "../classes/weixin";

class Action{
    jsParam(data,socket){
        Weixin.sns.jsParam(data).then((params)=>{socket.send({ type:"jsParam", ...params})})
    }
    saveWxImg({serverid, name}, socket){
        var openid = socket.user.openid;
        console.log(serverid, name, openid);
    }
}

export default new Action();