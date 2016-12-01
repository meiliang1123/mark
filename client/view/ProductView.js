import React from "react";
import w from "./react-weui/lib/";



function filter(obj){
    var ret = [];
    for(var key in obj){
        if(key.substring(0, 3) == "pic" && obj[key]){
            ret.push(obj[key]);
        }
    }
    return ret;
}


export default class View extends React.Component{

    render(){
        var {piccover, price, title, ...props} = this.props.data;
        function onClick(current){

        }
        function _renderContent(data){
            var doms = [];
            for(var key in data){
                if(key.substring(0, 3) == "pic" && data[key]){
                    doms.push(<img key={key} onClick={()=>this.props.onPreview(data[key], Object.values(data))} src={data[key]} />)
                }
            }
            return doms;
        }
        var pics = filter(props);
        return (
            <w.Article className="product">
                <Cover src={piccover}></Cover>
                <Desc {...{price,title}}></Desc>
                <w.ButtonArea  direction="horizontal">
                    <w.Button onClick={this.props.onCart} type="default" >加入购物车</w.Button>
                    <w.Button onClick={this.props.onBuy}>购买</w.Button>
                </w.ButtonArea>
                <w.Cells><w.Cell>
                    <w.CellBody>
                        商品详情：
                    </w.CellBody>

                </w.Cell></w.Cells>
                <section className="pics">
                    {pics.map((url, id)=><img key={id} onClick={()=>this.props.onPreview(url, pics)} src={url} />)}
                </section>


            </w.Article>

        )
    }
}


class Cover extends React.Component{
    render(){
        return(
        <section className="cover">
            <img src={this.props.src} />
        </section>
        )
    }
}

class Desc extends React.Component{
    render(){
       return  <section className="desc" >
            <h3 className="goods_name">{this.props.title}</h3>
            <h1 className="price">
                <span className="now_price">￥{this.props.price}</span>
                <span className="o_price">￥{this.props.price}</span>
            </h1>
        </section>
    }
}



