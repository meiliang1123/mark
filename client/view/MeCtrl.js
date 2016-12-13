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
import GIcon from "../img/icon_nav_grid.png"

export default class View extends React.Component{
    grids = [
        {
            icon: <img src={GIcon}/>,
            label: '我的订单',
            href: '#/order'
        },{
            icon: <img src={GIcon}/>,
            label: '供应商信息',
            href: '#/provider'
        },
    ]
    state = {
        ... UserStore.me.data
    }

    componentDidMount(){
        UserStore.me.on("change", ()=>{this.setState(UserStore.me.data)})
    }
    render(){
        return(
            <Page>
                <Panel>
                    <Cell access link onClick = {()=>this.props.router.push("/myinfo")}>
                        <CellBody>
                            <MediaBox type="appmsg" href="javascript:void(0);">
                                <MediaBoxHeader><img src = {this.state.headimgurl} /></MediaBoxHeader>
                                <MediaBoxBody>
                                    <MediaBoxTitle>{this.state.nickname}</MediaBoxTitle>
                                    <MediaBoxDescription>
                                        {this.state.telNumber}
                                    </MediaBoxDescription>
                                </MediaBoxBody>
                            </MediaBox>
                        </CellBody>
                            <CellFooter>
                            </CellFooter>
                    </Cell>
                </Panel>

                <Panel>
                    <Grids data={this.grids}>

                    </Grids>
                </Panel>
            </Page>
        )

    }
}
