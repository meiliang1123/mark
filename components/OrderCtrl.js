import React from "react";
import ProductStore from "../stores/ProductStore.client";
import User from "../stores/UserStore.client";



export default class View extends React.Component{
    constructor(props){
        super(props);
        this.state = {"data":{}};
    }

    render(){
        return(
            <section>
                <h2>我的订单</h2>
                <h3>我的所有订单，分类：购物，合伙人，代购</h3>
            </section>
        )

    }
}
