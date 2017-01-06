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
}  from "./react-weui/lib/";
import Page from "./components/Page"
import BoxList from "./components/BoxList"
import Address from "./components/Address"
import GIcon from "../img/icon_nav_grid.png"

import Util from "../util"
import ProductStore from "./../stores/ProductStore"
import CartStore from "./../stores/CartStore"
import AddressStore from "./../stores/AddressStore"
import UserStore from "./../stores/UserStore"


export default class PayCtrl extends React.Component {
    componentWillMount(){
        var products;
        var pid = this.props.params.pid;
        if(pid){
            products = {[pid]:1}
        } else {
            products = CartStore.getCart();
        }
        this.setState({products});
        for(var pid in products){
            ProductStore.get(pid).on("change", ()=>{this.forceUpdate()})
        }
        AddressStore.on("change", e=>this.forceUpdate())
    }
    onPay(){
        if(!AddressStore.current().isValid()){
            return this.setState({show_addr:true})
        }
        UserStore.pay(this.state.products, AddressStore.current().data)


    }
    render(){


        return (
            <Page>
                {this._renderAddress()}
                <br />
                {this._renderProduct()}
                <br />
                {this._renderPreview()}
            </Page>
        )
    }
    editProduct(pid, val){
        var {products} = this.state;
        products[pid] += val;
        if(!products[pid]) delete products[pid];
        this.setState({products});
        return !products[pid];
    }

    _renderProduct(){
        var data = [];
        for(var pid in this.state.products){
            var product = ProductStore.get(pid);
            var id = product.id,
                title = product.title,
                desc = (product.price / 100) || "",
                img = product.piccover;
            data.push( {id, title, desc, img})
        }
        var menu = [{label:"增加",onClick:({id})=>{return this.editProduct(id, 1)}},{label:"减少",onClick:(model)=>{return this.editProduct(id, -1) }}]
        return <BoxList title="商品列表" data={data} menu={menu} />
    }
    _renderPreview(){
        var items = [];
        var total = 0;
        for(var pid in this.state.products){
            var product = ProductStore.get(pid);
            total += product.price * this.state.products[pid];
            items.push(<PreviewItem key={pid} label={product.title} value={`${Util.money(product.price)} * ${this.state.products[pid]}`} />)
        }
        return (
            <Preview>
                <PreviewHeader>
                    <PreviewItem label="合计金额" value={Util.money(total)} />
                </PreviewHeader>
                <PreviewBody>
                    {items}
                </PreviewBody>
                <PreviewFooter>
                    <PreviewButton >再逛逛</PreviewButton>
                    <PreviewButton primary onClick={e=>this.onPay()}>付款</PreviewButton>

                </PreviewFooter>
            </Preview>
        )
    }
    _renderAddress(){
        var addr = AddressStore.current();

        var text = <span>{addr.text}</span>
        return (
            <Cells>
                <Cell access onClick={()=>{this.setState({show_addr:true})}}>
                    <CellBody>{text}</CellBody>
                    <CellFooter>编辑</CellFooter>
                </Cell>
                <Popup
                    show={this.state.show_addr}
                    style={{height: '80vh', overflow: 'scroll'}}
                    onRequestClose={e=>this.setState({show_addr: false})}
                >

                    <Address></Address>
                    <ButtonArea>
                        <Button type="default"  onClick={e=>this.setState({show_addr: false})}>完成</Button>
                    </ButtonArea>
                </Popup>
            </Cells>
        )
    }
}

