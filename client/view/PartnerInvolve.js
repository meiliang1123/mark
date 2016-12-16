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
        ...UserStore.me.data,
        idimg:"/img/idcardSample.jpg",
        waiting:false,
        showConfirm: false,
    }
    confirm = {
        title:"提交确认",
        buttons:[
            {
                type: 'default',
                label: '取消',
                onClick: ()=>{this.setState({showConfirm:false})}
            },
            {
                type: 'primary',
                label: '加入我们',
                onClick: ()=>{this.setState({showConfirm:false}); this.onSubmit();}
            }
        ]
    }
    constructor(props){
        super(props);
        if(UserStore.me.data.isSaler){
            props.router.push(`/partner`);
        }
    }
    componentDidMount(){

        UserStore.me.on("change",()=>{
            if(UserStore.me.isSaler){
                this.props.router.push(`/partner`);
            }
            this.setState({...UserStore.me.data, waiting:false});

        });
    }
    showImage(){
        WeixinStore.chooseImage().then(idimg=>{
            this.setState({idimg})
            return WeixinStore.uploadImage(idimg)
        }).then(serverid=>{
            let action = "util.saveID",
                name = "idcard.jpg";
            this.setState({waiting:true});
            UserStore.send({action, serverid, name});
        });
    }
    onSubmit(){
        var isSaler = 1;
        UserStore.send({action:"user.update", isSaler});
    }
    render(){
        return(
            <Page title="成为 markme·合伙人">
                <Toast icon="loading" show={this.state.waiting}>照片分析中...</Toast>
                <Cells><Cell>
                    <CellBody>很高兴能在这里跟你相遇，让markme携手与你一起创造一个属于我们的未来，你只需上传你的身份正照片即可成为 <strong>markme· 合伙人</strong> ！</CellBody>
                </Cell></Cells>
                <div style={{position:'relative'}}>
                    <img style={{width:"100%", height:"200px"}} src={this.state.idimg} />
                    <ButtonArea><Button onClick={()=>{this.showImage()}}>点击上传身份证</Button></ButtonArea>
                </div>

                <Form>
                    <FormCell>
                        <CellHeader>
                            <Label>姓名：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input value={this.state.name} type="text" placeholder=""/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>出生日期：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input value={this.state.birth} type="text" placeholder=""/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>身份证号码：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input value={this.state.id} type="text" placeholder=""/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>性别：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input value={this.state.sex} type="text" placeholder=""/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>地址：</Label>
                        </CellHeader>
                        <CellBody>
                            <Input value={this.state.address} type="text" placeholder=""/>
                        </CellBody>
                    </FormCell>

                </Form>
                <Agreement checked={this.state.checked} onChange = {({target:{checked}})=>{this.setState({checked})}}>
                    确认以上身份信息属于本人，且真实有效！
                    <br />
                    markme 由心而生，旨在贡献我们自己的力量，为每一位用户创造他们的价值，从而有我们的收获，我们永远把用户的价值放在首位，
                    成为 <strong>markme· 合伙人</strong> 意味着您也认可我们的价值观，并一起行动！
                </Agreement>
                <ButtonArea><Button disabled = {!this.state.checked} onClick={()=>{this.setState({showConfirm:true})}}>成为 <strong>markme· 合伙人</strong></Button></ButtonArea>
                <Dialog title={this.confirm.title} buttons={this.confirm.buttons} show={this.state.showConfirm}>确认您认同我们的价值观<br/>成为 <strong>markme· 合伙人</strong>。</Dialog>
            </Page>
        )

    }
}
