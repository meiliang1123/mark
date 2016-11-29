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
                <h2>个人中心</h2>
                <h3>各种信息查询和修改</h3>
            </section>
        )

    }
}
