import React from "react";
import ProductStore from "../stores/ProductStore.client";
import User from "../stores/UserStore.client";
import {browserHistory} from "react-router";

import ProductList from "./ProductList";
User.send({type:'getProduct'});



export default class View extends React.Component{
    constructor(props){
        super(props);
        this.state = {"products":Object.values(ProductStore.get())};
    }
    componentDidMount(){
        ProductStore.onChange(()=>{this.setState({"products":Object.values(ProductStore.get())})})
    }
    componentWillUnmount(){
        ProductStore.removeChange(()=>{this.setState({"products":Object.values(ProductStore.get())})})
    }

    onProduct(id){
        this.props.router.push(`/product/${id}`);
    }

    render(){
        var events = {
            onProduct: this.onProduct.bind(this)
        };
        return <ProductList {...this.state} {...events} ></ProductList>
    }
}


/*
 * <section>

 <h2>电商首页，类似微信购物入口京东首页</h2>
 <h3>链接客户的代购服务人首页</h3>
 <h3>哇喔，终于等到您了，多么开心您关注我们哦！</h3>
 </section>*/