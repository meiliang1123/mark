import React from "react";
import {
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
}  from "../react-weui/lib/";
import Page from "./Page"
import BoxList from "./BoxList"



import ProductStore from "./../../stores/ProductStore"
import CartStore from "./../../stores/CartStore"
import AddressStore from "./../../stores/AddressStore"
import UserStore from "./../../stores/UserStore"

import cnCity from "./cnCity"

export default class Address extends React.Component{
    state = {city_show:false}
    componentWillMount(){
        AddressStore.on("change", this.forceUpdate.bind(this))
    }
    renderAddresses(){
        var addrs = AddressStore.get();
        var current = AddressStore.current();
        return (
            <Form radio>
                {Object.values(addrs).map(addr=>{
                    return <FormCell key={addr.id} radio onChange={e=>AddressStore.setCurrent(AddressStore.get(e.target.value))}>
                        <CellBody>{addr.text}</CellBody>
                        <CellFooter>
                            <Radio name="radio1" value={addr.id} checked = {current.id === addr.id} defaultChecked={current.id === addr.id} />
                        </CellFooter>
                    </FormCell>
                })}


                <Cell link  onClick = {e=>AddressStore.getWeixinAddress()}>
                    <CellBody>获取微信地址</CellBody>
                </Cell>
                <Cell link  onClick = {e=>AddressStore.resetCurrent()}>
                    <CellBody>新增地址</CellBody>
                </Cell>
            </Form>
        )
    }
    render(){
        var addr = AddressStore.current();

        return (<div>

            {this.renderAddresses()}


            <Form>
                <FormCell>
                    <CellHeader>所在地区：</CellHeader>
                    <CellBody>
                        <Input type="text"
                               value={addr.city}
                               onClick={ e=> {
                                    e.preventDefault();
                                    this.setState({city_show: true})
                                }}
                               placeholder="点击选择城市"
                               readOnly={true}
                        />
                    </CellBody>

                </FormCell>
                <FormCell>
                    <CellHeader>详细地址：</CellHeader>
                    <CellBody>
                        <Input type="text"
                               value={addr.detail}
                               onChange={e=>AddressStore.setCurrent({detail:e.target.value})}
                               placeholder="输入地址"
                        />
                    </CellBody>
                </FormCell>
                <FormCell>
                <CellHeader>收件人：</CellHeader>
                <CellBody>
                    <Input type="text"
                           value={addr.name}
                           onChange={e=>AddressStore.setCurrent({name:e.target.value})}
                           placeholder="输入姓名"
                    />
                </CellBody>
            </FormCell>
                <FormCell>
                    <CellHeader>电话号码：</CellHeader>
                    <CellBody>
                        <Input type="text"
                               value={addr.tel}
                               onChange={e=>AddressStore.setCurrent({tel:e.target.value})}
                               placeholder="输入电话号码"
                        />
                    </CellBody>
                </FormCell>
                <FormCell>
                    <CellHeader>邮政编码：</CellHeader>
                    <CellBody>
                        <Input type="text"
                               value={addr.postal}
                               onChange={e=>AddressStore.setCurrent({postal:e.target.value})}
                               placeholder="输入邮政编码"
                        />
                    </CellBody>
                </FormCell>
                <CityPicker
                    data={cnCity}
                    onCancel={e=>this.setState({city_show: false})}
                    onChange={text=>{this.setState({city_show: false});AddressStore.setCurrent({city:text})}}
                    selected={[5,2,3]}
                    show={this.state.city_show}
                />

            </Form>
            <ButtonArea>
                <Button onClick={e=>AddressStore.saveCurrent()}>保存</Button>
            </ButtonArea>



        </div>);
    }
}


