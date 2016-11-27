import Weixin from "./weixin"


function succ(order){
    var provider = order.provider,
        saler = order.saler,
        buyer = order.buyer;
    var msg = {
        touser:provider,
        template_id:'XxCYbUEVEukvlY5NeCNgBx9AV9fyXwF3t3Cg5CdlnEM',
        url:"http://wx.markmeonline.com/",
        data:{
            "first": {
                "value":"恭喜你购买成功！", //title
                "color":"#173177"
            },
            "keyword1":{
                "value":"巧克力", //客户姓名
                "color":"#173177"
            },
            "keyword2": {
                "value":"39.8元", //联系电话
                "color":"#173177"
            },
            "keyword3": {
                "value":"2014年9月22日", //联系地址
                "color":"#173177"
            },
            "keyword4": {
                "value":"2014年9月22日", //订单时间
                "color":"#173177"
            },
            "remark":{
                "value":"xxxxxxxxxxxxxxxxxxxxxxxxxx", //备注
                "color":"#173177"
            }
        }
    };
    Weixin.cgi.post("/message/template/send",msg).then((resp)=>{
        console.log(resp,"xxx")
    });
}
//var a = 3;
export default  {
    succ,
}



//
//
//var data =  { appid: [ 'wx5f6db5bf7d4d7ad1' ],
//    bank_type: [ 'CFT' ],
//    cash_fee: [ '3' ],
//    fee_type: [ 'CNY' ],
//    is_subscribe: [ 'Y' ],
//    mch_id: [ '1325577401' ],
//    nonce_str: [ 'mk1479883308959' ],
//    openid: [ 'ou0vGvuFAdFHiWiaS2TybHkGP8QA' ],
//    out_trade_no: [ '147988330895744' ],
//    result_code: [ 'SUCCESS' ],
//    return_code: [ 'SUCCESS' ],
//    sign: [ '6236D38A77432CC5D6C7EC5CD96ED97A' ],
//    time_end: [ '20161123144155' ],
//    total_fee: [ '3' ],
//    trade_type: [ 'JSAPI' ],
//    transaction_id: [ '4000562001201611230583006693' ] };
//dispatcher.dispatch({"type":"orderComplete", data});

