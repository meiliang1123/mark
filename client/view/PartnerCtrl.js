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
import PartnerInvolve from "./PartnerInvolve"

import GIcon from "../img/icon_nav_grid.png"

export default class View extends React.Component{

    componentDidMount(){
        UserStore.me.on("change", ()=>{this.forceUpdate()})
    }
    render(){

        return(
            <Page>
                {(this.props.children) || (UserStore.me.isSaler !== 0 && <PartnerIndex {...this.props}></PartnerIndex> ) || <PartnerInvolve {...this.props}></PartnerInvolve> }

            </Page>
        )

    }
}


class PartnerIndex extends React.Component{


    grids = [
        {
            icon: <img src={GIcon}/>,
            label: '我的客户',
            href: '#/partner/customer'
        },{
            icon: <img src={GIcon}/>,
            label: '合伙人收入',
            href: '#/partner/incoming'
        },{
            icon: <img src={GIcon}/>,
            label: '合伙人订单',
            href: '#/partner/order'
        }
        ,{
            icon: <img src={GIcon}/>,
            label: '合伙人产品',
            href: '#/provider/product'
        },
    ]



    render(){



        return(
            <Page title="markme·合伙人">
                <Cells><Cell>
                    <CellBody>
                        您店铺的商品中，您有供应商身份的商品下单后都会被指派到您发货，由您为用户完成后续服务，请确保满足用户需求，跟客户保持长久的合作！
                    </CellBody>
                </Cell></Cells>
                <br/>
                <Grids data={this.grids}>

                </Grids>
            </Page>
        )

    }
}

