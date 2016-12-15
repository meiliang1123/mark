import React from "react";
import Content from "./ProductView";
import ProductStore from "../stores/ProductStore.js";
import UserStore from "../stores/UserStore.js";
import CartStore from "../stores/CartStore"
import WeixinStore from "../stores/WeixinStore"

ProductStore.on("payParam",(data)=>{

});


export default class View extends React.Component{
    state = {
        "data":{}
        }

    componentDidMount(){
        document.title = "example";
        var id = Number.parseInt(this.props.params.id);
        this.model = ProductStore.instance(id);
        console.log(this.model);
        this.setState({"data": this.model.data})
        this.model.on("change",()=>this.setState({"data": this.model.data}));
        UserStore.on("change",()=>ProductStore.refresh(this.model))
        ProductStore.refresh(this.model);

    }


    render(){
        return <Content
            onCart={()=>CartStore.addCart(this.model.id)}
            onBuy={()=>ProductStore.easyPay(this.model.id)}
            onPreview={(current, urls)=>{WeixinStore.previewImage(pic4share(current),urls.map(pic4share))}}
            data={this.state.data}
        ></Content>
    }
}

function pic4share(url){
    var uid = UserStore.me.uid;
    var url =  `http:wx.markmeonline.com/share/${uid}/${url.split(".com/")[1]}`;

    return url;
}