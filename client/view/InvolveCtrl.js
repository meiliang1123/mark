import React from "react";
import ProductStore from "../stores/ProductStore.js";
import User from "../stores/UserStore.js";
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
        idimg:"",
        serverid:"",
    }

    showImage(){
        WeixinStore.chooseImage().then(idimg=>{
            this.setState({idimg});
            return WeixinStore.uploadImage(idimg)
        }).then(serverid=>{
            let action = "util.saveWxImg",
                name = "idcard";
            UserStore.send({action, serverid, name});
        });
    }
    render(){
        return(
            <Page title="成为合伙人">

                <h3>加入合伙人的起始页</h3>
                <div style={{height:"1000px", width:"200px"}}></div>
                <img src={this.state.idimg} />
                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>QQ</Label>
                        </CellHeader>
                        <CellBody>
                            <Input value={this.state.serverid} type="tel" placeholder="Enter your qq#"/>
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea><Button onClick={()=>{this.showImage()}}>上传身份证</Button></ButtonArea>
            </Page>
        )

    }
}
