import React,{Component} from "react";
import LoginView from "./LoginView";
import User from "../stores/UserStore.js";



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