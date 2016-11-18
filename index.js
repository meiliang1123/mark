/**
 * Created by MarkMei 2016.4.7
 */

import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import IndexCtrl from './components/IndexCtrl';
import LoginCtrl from './components/LoginCtrl';
import InvolveCtrl from './components/InvolveCtrl';
import MeCtrl from './components/MeCtrl';
import OrderCtrl from './components/OrderCtrl';
import PartnerCtrl from './components/PartnerCtrl';
import ProductCtrl from './components/ProductCtrl';
import "./components/app.less";

class Transitor extends React.Component {
    render() {

        return (
            <ReactCSSTransitionGroup
                component="div"
                transitionName="page"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
                style={{height: '100%'} }
            >
                {this.props.children}
            </ReactCSSTransitionGroup>
        );
    }
}
//{React.cloneElement(this.props.children, {
//    key: this.props.location.pathname
//})}

ReactDOM.render(

    <Router  history={hashHistory}>
        <Route path="/" component={Transitor}>
            <IndexRoute component={IndexCtrl}/>
        </Route>
        <Route path="/product(/:id)" component={ProductCtrl}/>
        <Route path="/involve" component={InvolveCtrl}/>
        <Route path="/me" component={MeCtrl}/>
        <Route path="/order" component={OrderCtrl}/>
        <Route path="/partner" component={PartnerCtrl}/>

    </Router>

, document.getElementById('root'));