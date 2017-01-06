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
import BoxList from "./components/BoxList"

function json2map(json){
    var map = new Map();
    for (var date in json){
        map.set(date, json[date]);
    }
    return map;
}

export default class View extends React.Component{
    date = new Date()
    state = {}
    componentDidMount(){
        this.loadOrder();

    }
    loadOrder(){
        var date = this.date.toLocaleDateString()
        var now = new Date();
        now.setDate(now.getDate()- 30);
        if(now > this.date){this.setState({nomore: true}); return;}

        UserStore.LoginPromise.then(()=>{
            MassStore.agent({action:"saler.getOrder",date}, ({orders})=>{
                this.date.setDate(this.date.getDate() -1);
                if(Object.keys(orders).length) this.setState({[date]:orders})
                else this.loadOrder();
            })
        })
    }
    render(){
        var comps = [];
        for (var date in this.state){
            comps.push(this._genDayOrder(this.state[date], date))
        }

        return (
            <Page>
                {comps}
                <Panel>
                <Preview><PreviewFooter>
                    <PreviewButton plain disabled={!!this.state.nomore} onClick={this.loadOrder.bind(this)}>前一天</PreviewButton>
                </PreviewFooter></Preview>
                </Panel>
            </Page>
        )

    }
    _genDayOrder(orders, date){

        var data = [];
        json2map(orders).forEach(order=>{
            var User = UserStore.instance(order.uid);
            var id = order.id,
                title = User.nickname,
                desc = `${order.title} * ${order.count}`,
                tail = `￥${order.fee / 100}`,
                img = User.headimgurl;
            data.push( {id, title, desc, img, tail})
        })
        return <BoxList key={date} title={date} data={data} />
    }
}

