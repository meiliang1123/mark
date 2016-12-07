import React from "react";
import ProductStore from "../stores/ProductStore.js";
import UserStore from "../stores/UserStore.js";
import OrderStore from "../stores/OrderStore"
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
import GIcon from "../img/icon_nav_grid.png"


function _renderOrder(order,id){
    var product = ProductStore.get(order.product);
    return (
        <Cell access key={id}>
            <CellBody>
                <MediaBox type="appmsg" href="javascript:void(0);">
                    <MediaBoxHeader><img src = {product.piccover} /></MediaBoxHeader>
                    <MediaBoxBody>
                        <MediaBoxTitle>{product.title}</MediaBoxTitle>
                        <MediaBoxDescription>

                        </MediaBoxDescription>
                    </MediaBoxBody>
                </MediaBox>
            </CellBody>
            <CellFooter>
            </CellFooter>
        </Cell>
    )
}

function _renderGroup(group){
    var orders = [];
    for(var key in group){
        var order = group[key];
        orders.push(_renderOrder(order, key));
    }
    return orders;
}

export default class View extends React.Component{

    state = {
        orders:OrderStore.get()
    }

    componentDidMount(){
        OrderStore.on("change", ()=>{this.setState({orders:OrderStore.get()})})
        ProductStore.on("change",()=>{this.forceUpdate()})
    }
    render(){
        var groups = {}
        for(var oid in this.state.orders){
            var order = this.state.orders[oid];
            var gid = `${order.nonce}-${order.provider}`;
            if(!groups[gid]) groups[gid] = [];
            groups[gid].push(order);
        }
        var comps = [];
        for (var gid in groups){
            comps.push(<Panel key={gid}>
                <PanelHeader>
                    {gid}
                </PanelHeader>
                {_renderGroup(groups[gid])}
            </Panel>)
        }


        return(
            <Page title="我的订单">

                    {comps}



            </Page>
        )

    }
}
