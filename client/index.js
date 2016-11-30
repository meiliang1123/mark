/**
 * Created by MarkMei 2016.4.7
 */
//import 'babel-polyfill';

import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import FastClick from "fastclick";

//import {IndexCtrl,LoginCtrl,InvolveCtrl,MeCtrl,OrderCtrl,PartnerCtrl,ProductCtrl} from "./view/index"

import IndexCtrl from "./view/IndexCtrl"
import InvolveCtrl from "./view/InvolveCtrl"
import LoginCtrl from "./view/LoginCtrl"
import MeCtrl from "./view/MeCtrl";
import OrderCtrl from "./view/OrderCtrl"
import PartnerCtrl from "./view/PartnerCtrl"
import ProductCtrl from "./view/ProductCtrl"


import "./app.less";
import {CartIcon} from "./view/components/Cart";

import {
    Tab,
    TabBody,
    TabBar,
    TabBarItem,
    TabBarIcon,
    TabBarLabel,
    Article
} from "./view/react-weui/lib/";

import IconGrid from './img/icon_nav_grid.png';
import IconYes from './img/icon_nav_yes.png';
import IconDot from './img/icon_nav_actionSheet.png';



class Transitor extends React.Component {
    state = {tab:""}
    tab({tab}){
        this.setState({tab});
        this.props.router.push(`/${tab}`);
    }
    render() {

        return (


            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                style={{height: '100%'} }
            >
                <Tab>
                    <TabBody>
                        <ReactCSSTransitionGroup
                            component="div"
                            className="transitor"
                            transitionName="page"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                            style={{height: '100%',paddingBottom:"50px"}}
                        >
                            {React.cloneElement(this.props.children, {
                                key: this.props.location.pathname
                            })}
                        </ReactCSSTransitionGroup>
                        <CartIcon></CartIcon>
                    </TabBody>


                <TabBar>
                    <TabBarItem
                        active={this.state.tab == "index"}
                        onClick={e=>this.tab({tab:"index"})}
                        icon={<img src={IconGrid}/>}
                        label="首页"
                    />

                    <TabBarItem
                        active={this.state.tab == "involve"}
                        onClick={e=>this.tab({tab:"involve"})}
                        icon={<img src={IconYes}/>}
                        label="加入我们"
                    />
                    <TabBarItem
                        active={this.state.tab == "me"}
                        onClick={e=>this.tab({tab:"me"})}
                        icon={<img src={IconDot}/>}
                        label="个人中心"
                    />
                </TabBar>
                </Tab>

            </ReactCSSTransitionGroup>
        );
    }
}

window.addEventListener('load', () => {
    FastClick.attach(document.body);
});

ReactDOM.render(

    <Router  history={hashHistory}>
        <Route path="/" component={Transitor}>
            <IndexRoute component={IndexCtrl}/>
            <Route  path="/index" component={IndexCtrl}/>
            <Route path="/product(/:id)" component={ProductCtrl}/>
            <Route path="/involve" component={InvolveCtrl}/>
            <Route path="/me" component={MeCtrl}/>
            <Route path="/order" component={OrderCtrl}/>
            <Route path="/partner" component={PartnerCtrl}/>
        </Route>

    </Router>

, document.getElementById('root'));