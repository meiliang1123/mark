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


class User extends React.Component{
    model = {}
    componentDidMount(){
        var uid = this.props.uid;

        this.model = UserStore.instance(uid);
        this.model.on("change", ()=>{this.forceUpdate()})
    }
    render(){
        return (
            <MediaBox type="appmsg" href="javascript:void(0);">
                <MediaBoxHeader><img src = {this.model.headimgurl} /></MediaBoxHeader>
                <MediaBoxBody>
                    <MediaBoxTitle>{this.model.nickname}</MediaBoxTitle>
                    <MediaBoxDescription>
                        {this.model.telNumber}
                    </MediaBoxDescription>
                </MediaBoxBody>
            </MediaBox>
        )
    }

}

export default class View extends React.Component{
    state = {customers:[]}
    componentDidMount(){
        console.log(UserStore.LoginPromise);
        UserStore.LoginPromise.then(()=>{

            MassStore.agent({action:"partner.getCustomer"}, "partnerCustomer", ({customers})=>{
                console.log(this, customers);
                this.setState({customers})
            })
        })
    }
    render(){

        return(
            <Page>
                <Panel>
                    <PanelHeader>我的 <strong>markme· 合伙人</strong></PanelHeader>
                    <PanelBody>
                        {this.state.customers.map(uid=>{ return (<User uid={uid} key={uid} />)})}
                    </PanelBody>
                </Panel>


            </Page>
        )

    }
}
