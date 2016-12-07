import dispatcher from "../dispatcher";
import BaseModel from "./Model";
import BaseStore from "./Store";
import Util from "../util";

class Store extends BaseStore{
    previewImage(current, urls){
        wx.previewImage({
            current: current,
            urls: urls
        });
    }
    chooseImage(){
        return new Promise((resolve)=>{
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    resolve(res.localIds[0]) // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                }
            });
        });
    }
    uploadImage(localId){
        return new Promise((resolve)=>{
            wx.uploadImage({
                localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function (res) {
                    resolve(res.serverId) // 返回图片的服务器端ID
                }
            });
        })

    }
    openAddress(){
        return new Promise((resolve)=>{
            wx.openAddress({
                success:function(data){
                   resolve(data);
                }
            })
        })
    }

}

var WeixinStore = new Store(BaseModel);

export default WeixinStore;



var actions = {
    jsParam(param){
        //alert(JSON.stringify(param));
        var def = {
            //debug:true,
            jsApiList:['openAddress',"chooseWXPay","chooseImage","previewImage", "uploadImage" ]
        }
        wx.config({...def,...param});
    }
};
dispatcher.Reg(actions, "weixin");