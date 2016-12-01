import React from "react";
import UserStore from "../../stores/UserStore";

export default class Page extends React.Component{

    componentDidMount(){

    }

    render(){
        return (
            <div className="page">
                <h2 className="title">{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}