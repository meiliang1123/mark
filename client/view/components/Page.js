import React from "react";

export default class Page extends React.Component{
    render(){
        return (
            <div className="page">
                <img className="logo" src="/img/logo-square.png"/>
                {this.props.children}
            </div>
        )
    }
}