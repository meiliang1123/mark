import React from "react";
import ProductStore from "../stores/ProductStore.js";
import UserStore from "../stores/UserStore.js";
import {browserHistory} from "react-router";

import Page from "./components/Page"
import ProductList from "./components/ProductList"
import Banner from "./components/Banner"
import {CartIcon} from "./components/Cart"

import {
    version,

    //0.4.x
    Button, ButtonArea,Cells,CellsTitle,CellsTips,Cell,CellHeader,CellBody,CellFooter,
    Mask,Form,FormCell,Radio,Checkbox,Input,TextArea,Switch,Select,Uploader,Label,
    Toast,Progress,ActionSheet,Dialog,Msg,Article,Icon,Grids,
    Grid,GridIcon,GridLabel,
    Panel,PanelHeader,PanelBody,PanelFooter,
    MediaBox,MediaBoxHeader,MediaBoxBody,MediaBoxTitle,MediaBoxDescription,MediaBoxInfo,MediaBoxInfoMeta,
    NavBar,NavBarItem,Tab,TabBody,TabBodyItem,TabBar,TabBarIcon,TabBarItem,TabBarLabel,SearchBar,

    //1.0.0
    Flex,FlexItem,VCode,Agreement,Toptips,Gallery,GalleryDelete,
    Footer,FooterText,FooterLinks,FooterLink,LoadMore,
    Preview,PreviewHeader,PreviewBody,PreviewFooter,PreviewItem,PreviewButton,
    Picker,CityPicker,

    //non-standard
    Popup,PopupHeader
}  from "./react-weui/lib/";


UserStore.LoginPromise.then(()=>{
    UserStore.send({action:'product.get'});
})

export default class View extends React.Component{

    state = {
        "products":Object.values(ProductStore.get()),
        "saler": UserStore.saler,
    }
    constructor(props){
        super(props);
        this.refresh = this.refresh.bind(this);
    }
    refresh(){
       
        this.setState({
            saler:UserStore.saler,
            "products":Object.values(ProductStore.get()),
        })
    }
    componentDidMount(){

        document.title = "markme· 心生MALL";
        UserStore.saler.on("change",this.refresh)
        ProductStore.on("change",this.refresh)
    }
    componentWillUnmount(){
        UserStore.saler.removeListener("change",this.refresh)
        ProductStore.removeListener("change",this.refresh)
    }

    onProduct(id){
        this.props.router.push(`/product/${id}`);
    }

    render(){
        var events = {
            onProduct: this.onProduct.bind(this)
        };
        return <IndexView {...this.state} {...events} ></IndexView>
    }
}

class IndexView extends React.Component{

    render(){
        return(
            <Page title = {this.props.saler.nickname +  " 的心生店铺"} >

                <img className="logo" src="/img/logo-square.png"/>
                <img className="saler" src={this.props.saler.headimgurl} />
                <Banner></Banner>
                <ProductList {...this.props} ></ProductList>
                <CartIcon></CartIcon>
            </Page>

        )

    }
}


/*
 * <section>

 <h2>电商首页，类似微信购物入口京东首页</h2>
 <h3>链接客户的代购服务人首页</h3>
 <h3>哇喔，终于等到您了，多么开心您关注我们哦！</h3>
 </section>*/