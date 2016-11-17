import React from "react";
import Content from "./ProductView";
import ProductStore from "../stores/ProductStore.client";
import User from "../stores/UserStore.client";



export default class View extends React.Component{
    constructor(props){
        super(props);
        this.state = {"data":{}};
    }
    componentWillMount(){
        document.title = "example";
        var id = Number.parseInt(this.props.params.id);
        this.model = ProductStore.instance(id);
        this.model.onChange(()=>this.setState({"data": this.model.get()}));
        ProductStore.on("payParam",(data)=>{
            function onBridgeReady(){
                WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', data,
                function(res){
                    if(res.err_msg == "get_brand_wcpay_request：ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                }
            );
            }
            if (typeof WeixinJSBridge == "undefined"){
                if( document.addEventListener ){
                    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                }else if (document.attachEvent){
                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                }
            }else{
                onBridgeReady();
            }
        });
        User.onChange(()=>ProductStore.refresh(this.model))
        ProductStore.refresh(this.model);
    }


    render(){
        return <Content onBuy={()=>ProductStore.getPayParam( this.model)} data={this.state.data}></Content>
    }
}
