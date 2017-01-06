import React from "react";
import Content from "./ProductView";
import ProductStore from "../stores/ProductStore.js";
import UserStore from "../stores/UserStore.js";
import CartStore from "../stores/CartStore"
import WeixinStore from "../stores/WeixinStore"


export default class View extends React.Component{


    constructor(props){
        super(props);
        this.refresh = this.refresh.bind(this);
        var id = Number.parseInt(this.props.params.id);
        this.model = ProductStore.instance(id);
        this.state = {
            "data": this.model.data
        }
    }
    refresh(){
        this.setState({
            "data": this.model.data
        });
    }
    componentDidMount(){
        document.title = "example";
        this.model.on("change",this.refresh);
    }
    componentWillUnmount(){
        this.model.removeListener("change", this.refresh);
    }


    render(){
        return <Content
            onCart={()=>CartStore.addCart(this.model.id)}
            onBuy={()=>this.props.router.push(`/pay/${this.model.id}`)}
            onPreview={(current, urls)=>{WeixinStore.previewImage(pic4share(current),urls.map(pic4share))}}
            data={this.state.data}
        ></Content>
    }
}

function pic4share(url){
    var uid = UserStore.me.uid;
    var url =  `http:wx.markmeonline.com/share/${uid}/${url.split(".com/")[1]}`;

    return url;
}