import Weixin from "./classes/weixin"


var data = {
    "button":[
        {
            "type":"view",
            "name":"心生Mall",
            "url":"http://wx.markmeonline.com/#/"
        },
        {
            "type":"view",
            "name":"合伙人",
            "url":"http://wx.markmeonline.com/#/partner"
        },
        {
            "name":"我的markme",
            "sub_button":[
                {
                    "type":"view",
                    "name":"我的订单",
                    "url":"http://wx.markmeonline.com/#/order"
                },
                {
                    "type":"view",
                    "name":"个人中心",
                    "url":"http://wx.markmeonline.com/#/me"
                }]
        }

    ]
}

Weixin.cgi.post("/menu/create",data)
    .then(ret=>console.log(ret));