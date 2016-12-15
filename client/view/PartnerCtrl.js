import React from "react";
import ProductStore from "../stores/ProductStore.js";
import UserStore from "../stores/UserStore.js";
import WeixinStore from "../stores/WeixinStore"
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

export default class View extends React.Component{

    render(){
        console.log(this.props);
        return(
            <Page title="markme· 合伙人">
                {(this.props.children) || <PartnerIndex></PartnerIndex>}

            </Page>
        )

    }
}

class PartnerIndex extends React.Component{
    render(){
        return (
            <div>
                <h2>合伙人首页</h2>
                <h3>if未成为合伙人的显示成为合伙人流程</h3>
                <h3>两个模块，代购合作 + 平台合作</h3>
                <h3>代购合作：显示自己的产品列表，预览自己的首页</h3>
                <h3>平台合作：显示自己的代售的平台产品</h3>
                <h3>合作伙伴信息 订单，用户等</h3>
            </div>
        )
    }
}
