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
    state = {
        saler:UserStore.saler,
        trust: UserStore.me.trust,
    }

    componentDidMount(){
        UserStore.saler.on("change", ()=>{this.setState({saler:UserStore.saler})})
        UserStore.me.on("change", ()=>{this.setState({trust: UserStore.me.trust})})
    }
    render(){
        return(
            <div>
                <Panel>
                    <PanelHeader>我的 <strong>markme· 合伙人</strong></PanelHeader>
                    <PanelBody>
                        <MediaBox type="appmsg" href="javascript:void(0);">
                            <MediaBoxHeader><img src = {this.state.saler.headimgurl} /></MediaBoxHeader>
                            <MediaBoxBody>
                                <MediaBoxTitle>{this.state.saler.nickname}</MediaBoxTitle>
                                <MediaBoxDescription>
                                    {this.state.saler.telNumber}
                                </MediaBoxDescription>
                            </MediaBoxBody>
                        </MediaBox>
                    </PanelBody>
                </Panel>

                <Form>
                    <FormCell switch>
                        <CellBody>是否信任</CellBody>
                        <CellFooter>
                            <Switch checked = {this.state.trust} onChange={(event)=>{UserStore.saveInfo({trust:Number(event.target.checked)})}}/>
                        </CellFooter>
                    </FormCell>
                </Form>
                <CellsTips>如果信任您的<strong>markme· 合伙人</strong> 在您购买了有他提供销售和发货服务的商品是，款项会在您付款后立即转入对方账户，markme不提供担保服务</CellsTips>
            </div>
        )

    }
}


