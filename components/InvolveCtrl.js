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
                <h2>成为合伙人</h2>
                <h3>加入合伙人的起始页</h3>
            </section>
        )

    }
}
