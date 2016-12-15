import React from "react";
import ProductStore from "../stores/ProductStore.js";
import UserStore from "../stores/UserStore.js";
import {browserHistory} from "react-router";

import IndexView from "./IndexView";




export default class View extends React.Component{

    state = {
        "products":Object.values(ProductStore.get()),
        "saler": UserStore.saler,
    }

    componentDidMount(){
        document.title = "markme· 心生MALL";
        UserStore.send({action:'product.get'});
        UserStore.saler.on("change",arg=>this.setState({saler:UserStore.saler}))
        ProductStore.on("change",()=>{this.setState({"products":Object.values(ProductStore.get())})})
    }

    onProduct(id){
        this.props.router.push(`/product/${id}`);
    }

    render(){
        var events = {
            onProduct: this.onProduct.bind(this)
        };
        return <IndexView {...this.state} {...events} ></IndexView>
    }
}


/*
 * <section>

 <h2>电商首页，类似微信购物入口京东首页</h2>
 <h3>链接客户的代购服务人首页</h3>
 <h3>哇喔，终于等到您了，多么开心您关注我们哦！</h3>
 </section>*/