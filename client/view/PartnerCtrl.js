import React from "react";
import ProductStore from "../stores/ProductStore.js";
import User from "../stores/UserStore.js";



export default class View extends React.Component{
    constructor(props){
        super(props);
        this.state = {"data":{}};
    }

    render(){
        return(
            <section>
                <h2>合伙人首页</h2>
                <h3>if未成为合伙人的显示成为合伙人流程</h3>
                <h3>两个模块，代购合作 + 平台合作</h3>
                <h3>代购合作：显示自己的产品列表，预览自己的首页</h3>
                <h3>平台合作：显示自己的代售的平台产品</h3>
                <h3>合作伙伴信息 订单，用户等</h3>
            </section>
        )

    }
}
