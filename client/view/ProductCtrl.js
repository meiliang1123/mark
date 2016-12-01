import React from "react";
import Content from "./ProductView";
import ProductStore from "../stores/ProductStore.js";
import User from "../stores/UserStore.js";
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
        User.on("change",()=>ProductStore.refresh(this.model))
        ProductStore.refresh(this.model);

    }


    render(){
        return <Content
            onCart={()=>CartStore.addCart(this.model.id)}
            onBuy={()=>ProductStore.easyPay(this.model.id)}
            onPreview={WeixinStore.previewImage}
            data={this.state.data}
        ></Content>
    }
}
