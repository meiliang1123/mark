import Weixin from "./weixin"
import Mysql from "./mysql"

module.exports = function deliver({xml:data}){

    var type = data.MsgType[0],
        event = data.Event && data.Event[0].toLowerCase();

    var func = type == "event" ? event : type;
    console.log(data);
    ( typeof actions[func] == "function") && actions[func](data);


}

var actions = {
    scan(data){
        var openid = data.FromUserName[0], eventkey = data.EventKey[0];
        Mysql().getOne("user",{uid:eventkey})
            .then(user=>{
                var msg = {
                    "touser":openid,
                    "msgtype":"news",
                    "news":{
                        "articles": [
                            {
                                "title":`来自${user.nickname}的邀请`,
                                "description":`您通过${user.nickname}关注到了我们，请确认选择${user.sex == 2 ? "她" : '他'}为您的《markme· 合伙人》`,
                                "url":"http://wx.markmeonline.com/#/",
                                "picurl":`http://wx.markmeonline.com/img/coop/${user.uid}`,
                            }
                        ]
                    }
                };
                return msg;
            })
            .then(msg=>{
                Weixin.cgi.post('/message/custom/send', msg);
            })
    },
    subscribe(data){
        var openid = data.FromUserName[0];
        Weixin.cgi.get({path:`/user/info?openid=${openid}&lang=zh_CN`}).then(user=>{
            Mysql().save("user", user);
            var msg = {
                "touser":openid,
                "msgtype":"text",
                text:{
                    content:`哇喔，亲爱的${user.nickname}，终于等到您了，多么开心您关注我们哦！/:handclap/:handclap/:handclap \n 小马一定竭尽全力为您服务！/:,@f/:,@f/:,@f`,
                },

            };
            Weixin.cgi.post('/message/custom/send', msg);

            if(data.EventKey) {
                data.EventKey[0] = data.EventKey[0].split("_")[1];
                actions.scan(data);
            }
        })



    },
    unsubscribe(data){
        var openid = data.FromUserName[0];
        Weixin.cgi.get({path:`/user/info?openid=${openid}&lang=zh_CN`}).then(data=>{
            Mysql().save("user", data);
        })
    }

}

