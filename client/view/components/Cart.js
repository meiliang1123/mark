import React from "react";
import ProductStore from "../../stores/ProductStore";
import CartStore from "../../stores/CartStore"
import UserStore from "../../stores/UserStore";
//import Address from "./Address";
import w,{
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
    CellFooter,
    PopupHeader,
    Flex,
    FlexItem,
} from "../react-weui/lib/";



export default class Cart extends React.Component{
    state = {
        products:CartStore.getCartProduct(),
        cart: CartStore.getCart(),
        address:UserStore.getAddress(),
    }

    componentDidMount(){
        UserStore.triggerAddress();
        UserStore.on("change",()=>{
            this.setState({address:UserStore.getAddress()})
        })
        CartStore.on("change",()=>{
            this.setState({"products": CartStore.getCartProduct()})
        });
    }

    render(){
        let {userName, postalCode , provinceName , cityName  , countryName , detailInfo, nationalCode , telNumber} = this.state.address;
        return (
            <Panel>

                <PanelHeader>
                    <Flex>
                        <FlexItem>
                            收货地址：
                            <span>{provinceName}</span>
                            <span> {cityName}</span>
                            <span> {countryName}</span>
                            <span> {detailInfo}</span>
                            <span> {postalCode}</span>

                            <span>  {userName}  </span>
                            <span> {telNumber}</span>
                        </FlexItem>

                            <w.Button size="small" plain onClick={()=>{UserStore.triggerAddress(true)}} >修改</w.Button>

                    </Flex>

                </PanelHeader>
                <PanelBody>
                    {this.state.products.map((prod)=>{return this._renderProduct(prod)})}
                </PanelBody>


            </Panel>
        );
    }
    _renderProduct(prod){
        var count = this.state.cart[prod.id];

        return(

            <MediaBox onClick={()=>this.props.onProduct(prod.id)} key={prod.id} type="appmsg" href="javascript:void(0);">
                <MediaBoxHeader><img src={prod.piccover} /></MediaBoxHeader>
                <MediaBoxBody>
                    <MediaBoxTitle>{prod.title}</MediaBoxTitle>
                    <MediaBoxDescription>
                        {` ￥${prod.price} * ${count} = ${prod.price * count}`}
                    </MediaBoxDescription>
                </MediaBoxBody>
            </MediaBox>
        )
    }
}


export class CartIcon extends React.Component{
    state = {
        num: CartStore.getCartCount(),
        showCart:false,
    }
    componentDidMount(){
        CartStore.on("change",()=>this.setState({"num": CartStore.getCartCount()}));
    }

    toggleCart(){
        this.setState({showCart: !this.state.showCart});
    }


    render(){
        var count = this.state.num ? <span className="num">{this.state.num}</span>: "";
        var Cart = this.state.showCart ? <CartPopup show={this.state.showCart} onClose={()=>{}}></CartPopup> : "";

        return <div onClick={this.toggleCart.bind(this)} className="cart">
            <w.Icon value="waiting" />
            {count}
            {Cart}
        </div>
    }
}


export class CartPopup extends React.Component{
    render(){
        return(
            <w.Popup show={this.props.show}>
                <PopupHeader
                    left="关闭"
                    right={<w.Button size="small" >购买</w.Button>}
                    leftOnClick={this.props.onClose}
                    rightOnClick={()=>{this.props.onClose();ProductStore.cartPay()}}
                />
                <Cart></Cart>
            </w.Popup>

        )

    }
}

