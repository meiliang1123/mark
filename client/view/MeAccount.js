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
                <div class="money">
                    <p>我的余额</p>
                    <h2>￥12.12</h2>
                    <ButtonArea>
                        <Button type="primary">充值</Button>
                        <Button type="default">提现</Button>
                    </ButtonArea>
                </div>
                <Panel>
                    <PanelHeader>账户明细</PanelHeader>
                    <PanelBody>

                            <Cell>
                                <CellBody>

                                    <MediaBoxTitle>充值</MediaBoxTitle>

                                    <MediaBoxDescription>备注</MediaBoxDescription>

                                </CellBody>
                                <CellFooter>+1.1</CellFooter>
                            </Cell>
                            <Cell>
                                <CellBody>

                                    <MediaBoxTitle>充值</MediaBoxTitle>

                                    <MediaBoxDescription>备注</MediaBoxDescription>

                                </CellBody>
                                <CellFooter>+1.1</CellFooter>
                            </Cell>
                            <Cell>
                                <CellBody>

                                    <MediaBoxTitle>充值</MediaBoxTitle>

                                    <MediaBoxDescription>备注</MediaBoxDescription>

                                </CellBody>
                                <CellFooter>+1.1</CellFooter>
                            </Cell>

                    </PanelBody>
                </Panel>
            </Page>
        )

    }
}
