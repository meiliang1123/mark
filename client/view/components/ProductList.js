import React,{Component} from "react";
import { browserHistory } from 'react-router'
import {
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
    Cells,
    Cell,
    CellHeader,
    CellBody,
    CellFooter
} from "../react-weui/lib/";


export default class View extends Component{
    render(){
        var {products, title = "商品列表"} = this.props;

        return (
            <Panel>
                <PanelHeader>
                    {title}
                </PanelHeader>
                <PanelBody>
                    {products.map((prod)=>{return this._renderProduct(prod)})}
                </PanelBody>
            </Panel>
        );
    }

    _renderProduct(prod){


        return(

            <MediaBox onClick={()=>this.props.onProduct(prod.id)} key={prod.id} type="appmsg" href="javascript:void(0);">
                <MediaBoxHeader><img src={prod.piccover} /></MediaBoxHeader>
                <MediaBoxBody>
                    <MediaBoxTitle>{prod.title}</MediaBoxTitle>
                    <MediaBoxDescription>

                    </MediaBoxDescription>
                </MediaBoxBody>
            </MediaBox>
        )
    }
}


/*
 * <section>
 <div>
 <input type="text"
 value={this.state.username}
 onChange={(e)=>{this.setState({username:e.target.value})}}
 />
 <w.Button
 onClick={()=>{this.props.onLogin(this.state.username)}}
 >登录</w.Button>
 <br />

 </div>
 <h2>电商首页，类似微信购物入口京东首页</h2>
 <h3>链接客户的代购服务人首页</h3>
 <h3>哇喔，终于等到您了，多么开心您关注我们哦！</h3>
 </section>*/