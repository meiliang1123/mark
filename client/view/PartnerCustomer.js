import React from "react";
import UserStore from "../stores/UserStore.js";
import MassStore from "../stores/MassStore"
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
import Page from "./components/Page"
import BoxList from "./components/BoxList"

class Customer extends React.Component{
    render(){
        return (

            <Page>
                <BoxList ></BoxList>
            </Page>
        )
    }
}

export default class View extends React.Component{
    state = {customers:[]}
    componentDidMount(){
        UserStore.LoginPromise.then(()=>{
            MassStore.agent({action:"saler.getCustomer"}, ({customers})=>{
                this.setState({customers})
            })
        })
        UserStore.on("change", ()=>{this.forceUpdate()})
    }
    render(){
        var data = this.state.customers.map(uid=>{
            var User = UserStore.instance(uid);
            var id = uid,
                title = User.nickname,
                desc = "desc",
                href = `#/partner/customer/${uid}`,
                tail = "whatever",
                img = User.headimgurl;
            return {id, title, desc, img, tail,href}
        })

        return this.props.params.uid ? (<Customer uid={this.props.params.uid}></Customer>):(
            <Page>
                <BoxList title="我的客户" data={data}
                />
            </Page>
        )

    }
}

