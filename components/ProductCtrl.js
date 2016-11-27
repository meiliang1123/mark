import React from "react";
import Content from "./ProductView";
import ProductStore from "../stores/ProductStore.client";
import User from "../stores/UserStore.client";


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
        this.model.onChange(()=>this.setState({"data": this.model.get()}));
        User.onChange(()=>ProductStore.refresh(this.model))
        ProductStore.refresh(this.model);

    }


    render(){
        return <Content onCart={()=>ProductStore.addCart(this.model.get("id"))}  onBuy={()=>ProductStore.easyPay(this.model.id)} data={this.state.data}></Content>
    }
}
