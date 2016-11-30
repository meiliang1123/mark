import Weixin from "../classes/weixin";

class Action{
    jsParam(data,socket){
        Weixin.sns.jsParam(data).then((params)=>{socket.send({ type:"jsParam", ...params})})
    }
}

export default new Action();