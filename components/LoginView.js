import React,{Component} from "react";
import w from "react-weui";

export default class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {username:"default"};
    }

    render(){
        return (
            <div>
                <input type="text"
                       value={this.state.username}
                       onChange={(e)=>{this.setState({username:e.target.value})}}
                />
                <w.Button
                    onClick={()=>{this.props.onLogin(this.state.username)}}
                >登录</w.Button>
                <br />

            </div>
        );
    }
}