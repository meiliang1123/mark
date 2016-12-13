import React from "react";
import ProductStore from "../stores/ProductStore.js";
import UserStore from "../stores/UserStore.js";
import OrderStore from "../stores/OrderStore"
import ProviderStore from "../stores/ProviderStore"
import ProductList from "./components/ProductList"
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
import GIcon from "../img/icon_nav_grid.png"



export default class View extends React.Component{

    state = {
        primary:"香港代购",
        menu:[
            {
                title:"香港代购",
                comp : <HK></HK>,
            },
            {
                title:"我的产品",
                comp : <MyProduct></MyProduct>,
            },
            {
                title:"我的订单",
                comp : <MyOrder></MyOrder>,
            },
        ]

    }


    componentDidMount(){
        //ProviderStore.on("change", ()=>{this.setState({orders:OrderStore.get()})})
        ProviderStore.on("change",()=>{this.forceUpdate()})
    }
    _genContent(){
        var {menu, primary} = this.state;
        var content = null;
        var that = this;
        var click =function (primary){
            return function(){
                that.setState({primary});
            }
        }
        var comp = menu.map((item)=>{
            var p = item.title == primary;
            if(p) content = item.comp;
            return (
                <PreviewButton key={item.title} primary={item.title == primary} onClick={click(item.title)} >{item.title}</PreviewButton>
            )
        })

        return (
            <div>
                <Preview>
                    <PreviewFooter>
                        {comp}

                    </PreviewFooter>
                </Preview>
                {content}
            </div>
        )
    }
    render(){



        return(
            <Page title="我的供应商信息">
                <Cells><Cell>
                    <CellBody>
                        您店铺的商品中，您有供应商身份的商品下单后都会被指派到您发货，由您为用户完成后续服务，请确保满足用户需求，跟客户保持长久的合作！
                    </CellBody>
                </Cell></Cells>
                <br/>
                {this._genContent()}
                <br/>
                <Cells><Cell>
                    <CellBody>
                        Q&A:供应商的货款会根据平台规则和用户的要求在指定阶段划款到您的微信账户，跟<strong>markme· 合伙人</strong>的体系是独立的
                    </CellBody>
                </Cell></Cells>
            </Page>
        )

    }
}

class HK extends React.Component{
    componentDidMount(){
        //ProviderStore.on("change", ()=>{this.setState({orders:OrderStore.get()})})
        ProviderStore.on("change",()=>{this.forceUpdate()})
    }
    render(){
        var isHK = ProviderStore.isHK();
        var yes = ( <ProductList title="香港代购商品" products={ProductStore.filter({category:"hk"})}></ProductList>);
        var no = (
            <Cells>
                <Cell>您还未成为我们合作香港代购</Cell>

            </Cells>
        );
        return isHK? yes: no;
    }

}

class MyProduct extends React.Component{
    render(){
        return (
            <Cell>
                供应商产品
            </Cell>
        )
    }
}

class MyOrder extends React.Component{
    render(){
        return (
            <Cell>
                供应商订单
            </Cell>
        )
    }
}

