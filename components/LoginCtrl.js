import React,{Component} from "react";
import LoginView from "./LoginView";
import dispatcher from "../classes/dispatcher";
import User from "../stores/UserStore.client";

function _query2Object(str){
    return str.slice(1).split("&").map((kv)=>kv.split("=")).reduce((ret,entry)=>{let [key,val]= entry;ret[key] = val; return ret;},{})
}


export default class LoginCtrl extends Component{

    componentDidMount(){
        User.onLogin(()=>{
            console.log(User);
            User.get("openid").length > 0 ? this.props.router.replace("/product/1") :this.render();
        });
    }

    _onLogin = (username)=>{
        User.send({"type":'login',username});
    }
    render(){
        console.log(User.get("uid"));

        return (
            <LoginView onLogin={this._onLogin}></LoginView>
        );
    }
}