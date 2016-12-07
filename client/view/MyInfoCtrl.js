import React from "react";
import UserStore from "../stores/UserStore.js";

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
    state = UserStore.me.data
    componentDidMount(){
        UserStore.me.on("change",()=>this.setState(UserStore.me.data))
    }
    render(){

        return(
            <Page>



                <Cells>
                    <CellsTitle>收货信息</CellsTitle>
                    <Cell>
                        <CellHeader>
                            <Label>收货地址</Label>
                        </CellHeader>
                        <CellFooter>
                            {this.state.provinceName}{this.state.cityName}{this.state.countryName}{this.state.detailInfo}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            <Label>收货人姓名</Label>
                        </CellBody>
                        <CellFooter>
                            {this.state.userName}
                        </CellFooter>
                    </Cell>

                    <Cell>
                        <CellBody>
                            <Label>邮编</Label>
                        </CellBody>
                        <CellFooter>
                            {this.state.postalCode}
                        </CellFooter>
                    </Cell>
                </Cells>

                <Cells>
                    <CellsTitle>实名认证信息</CellsTitle>

                    <Cell>
                        <CellBody>
                            <Label>姓名</Label>
                        </CellBody>
                        <CellFooter>
                            {this.state.name}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            <Label>出生日期</Label>
                        </CellBody>
                        <CellFooter>
                            {this.state.birth}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            <Label>身份证号码</Label>
                        </CellBody>
                        <CellFooter>
                            {this.state.id}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellBody>
                            <Label>性别</Label>
                        </CellBody>
                        <CellFooter>
                            {this.state.sex}
                        </CellFooter>
                    </Cell>
                    <Cell>
                        <CellHeader>
                            <Label>地址</Label>
                        </CellHeader>
                        <CellFooter>
                            {this.state.address}
                        </CellFooter>
                    </Cell>

                </Cells>


            </Page>
        )

    }
}
