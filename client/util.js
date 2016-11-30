

function loginInfo(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        var openid = localStorage.getItem("openid");
        if(openid && openid != "undefined") {
            return {openid};
        }
    }
    var {code, saler} = getQuery();
    if(saler){
        localStorage.saler = saler;
    }

    if(code){
        return {code};
    }
}

function weixinRedirect () {
    var redirect = encodeURIComponent(location.origin + location.pathname + location.hash);
    var url = `https://sz.open.weixin.qq.com/connect/oauth2/authorize?appid=wx5f6db5bf7d4d7ad1&redirect_uri=${redirect}&response_type=code&scope=snsapi_userinfo&state=ABC#wechat_redirect`;
    window.location.href = url;
}

function editAddress (force = false){

    if(!User.detailInfo || force){
        wx.ready(()=>{
            wx.openAddress({
                success:function(data){
                    User.set(data);
                    User.send({type:"updateUserinfo", userinfo:User.get()})
                }
            })
        })
    }

}


function getQuery(){
    var str = window.location.search;
    return str.slice(1).split("&").map((kv)=>kv.split("=")).reduce((ret,entry)=>{let [key,val]= entry;ret[key] = val; return ret;},{})
}


export default {
    loginInfo,
    weixinRedirect,
    editAddress,
    getQuery,
};