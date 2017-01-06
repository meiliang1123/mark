import React from "react";
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
}  from "../react-weui/lib/";

function _renderRow(row, click){
    var { id, img, title, href , desc = "", tail } = row;
    var addon =  (tail ) && typeof tail == "string" && (<MediaBoxInfo> <MediaBoxInfoMeta>{tail}</MediaBoxInfoMeta></MediaBoxInfo>)
    var onClick = typeof href == "function" ? href : ()=>{click(row)}
    var header = img ? <MediaBoxHeader><img src={img} /></MediaBoxHeader> : null
    return(
        <MediaBox onClick={onClick} key={id} type="appmsg" href={typeof href == "string" ? href:""}>
            {header}
            <MediaBoxBody>
                <MediaBoxTitle>{title}</MediaBoxTitle>
                <MediaBoxDescription>
                    {desc}
                </MediaBoxDescription>
                {addon}
            </MediaBoxBody>
        </MediaBox>
    )
}



export default class BoxList extends React.Component{
    state = {current:false}
    _renderMenu(){
        var {menu} = this.props;
        if(!menu) return null;
        var close = ()=>{this.setState({current:false})};
        var menus = menu.map((row, id)=>{
            return {label:row.label, onClick :()=>{row.onClick(this.state.current) && close()}}
        })

        return <ActionSheet show = {!!this.state.current} menus = {menus} actions={[{label:"取消",onClick:close}]} onRequestClose = {close}></ActionSheet>
    }
    render(){
        var {data, title, more } = this.props;
        var compTitle = title ? <PanelHeader>{title}</PanelHeader> : null;
        var compMore = more ?<PanelFooter href="javascript:void(0);"><CellMore /></PanelFooter>: null;
        var compAction = this._renderMenu();
        var click = (current)=>{this.setState({current})};
        return (
            <Panel>
                {compTitle}
                <PanelBody>
                    {data instanceof Array ? data.map((row)=>{return _renderRow(row, click)}) :"loading"}
                    {compMore}
                </PanelBody>
                {compAction}
            </Panel>
        );
    }
}

