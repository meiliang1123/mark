import Weixin from "./classes/weixin"


var data = {
    "expire_seconds": 2592000,
    "action_name": "QR_SCENE",
    "action_info": {
        "scene": {"scene_id": 123}
    }
}


Weixin.cgi.post("/qrcode/create",data)
    .then(ret=>{
        console.log(ret);
    });