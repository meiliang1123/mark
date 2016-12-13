import Weixin from "./weixin"
import Mysql from "./mysql"

module.exports = function deliver({xml:data}){

    Mysql().getOne("user",{uid:data.EventKey[0]})
        .then(user=>{
            var msg = {
                "touser":data.FromUserName[0],
                "msgtype":"news",
                "news":{
                    "articles": [
                        {
                            "title":`您通过${user.nickname}的店铺关注了markme`,
                            "description":`请确认选择${user.nickname}为您的《markme· 合伙人》`,
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





}

