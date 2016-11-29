import React from "react";
import ProductStore from "../stores/ProductStore.client";
import User from "../stores/UserStore.client";

import {
    version,

    //0.4.x
    Button,
    ButtonArea,
    Cells,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Mask,
    Form,
    FormCell,
    Radio,
    Checkbox,
    Input,
    TextArea,
    Switch,
    Select,
    Uploader,
    Label,
    Toast,
    Progress,
    ActionSheet,
    Dialog,
    Msg,
    Article,
    Icon,
    Grids,
    Grid,
    GridIcon,
    GridLabel,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    NavBar,
    NavBarItem,
    Tab,
    TabBody,
    TabBodyItem,
    TabBar,
    TabBarIcon,
    TabBarItem,
    TabBarLabel,
    SearchBar,

    //1.0.0
    Flex,
    FlexItem,
    VCode,
    Agreement,
    Toptips,
    Gallery,
    GalleryDelete,
    Footer,
    FooterText,
    FooterLinks,
    FooterLink,
    LoadMore,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    PreviewItem,
    PreviewButton,
    Picker,
    CityPicker,

    //non-standard
    Popup,
    PopupHeader
}  from "../react-weui/lib/";



export default class View extends React.Component{
    constructor(props){
        super(props);
        this.state = {"data":{}};
    }

    render(){
        return(
            <div>
                <h2>成为合伙人</h2>
                <h3>加入合伙人的起始页</h3>
            </div>
        )

    }
}
