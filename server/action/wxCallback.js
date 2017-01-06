import Weixin from "./../classes/weixin"
import Mysql from "./../classes/mysql"
import Order from "./../models/order"

module.exports = {
    msg({xml: data}){
        var type = data.MsgType[0],
            event = data.Event && data.Event[0].toLowerCase();

        var func = type == "event" ? event : type;
        console.log(data);
        ( typeof actions[func] == "function") && actions[func](data);
    },
    pay({xml:data}){
        Order.combinePayed(data);
    }
}
var actions = {
    scan(data){
        var openid = data.FromUserName[0], saler = data.EventKey[0];
        if(saler < 10000000){
            //not a user share action
            return;
        }

        Mysql().getOne('user',{openid})
            .then(user=>{
                if(!user.saler ){
                    Mysql().save("user", {openid, saler, trust:0})

                    Mysql().getOne("user",{uid:saler})
                        .then(user=>{

                            var msg = {
                                "touser":openid,
                                "msgtype":"news",
                                "news":{
                                    "articles": [
                                        {
                                            "title":`成功设置 markme· 合伙人`,
                                            "description":`您成功指定${user.nickname} 为您的《markme· 合伙人》，进入确认您是否信任${user.sex == 2 ? "她" : '他'}`,
                                            "url":"http://wx.markmeonline.com/#/partner/mine",
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
                }
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

