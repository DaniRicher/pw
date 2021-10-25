import React from "react";
import {Route, Switch} from 'react-router-dom';
import Store from './rutas/Store';
import Cart from './rutas/Cart'
import About from "./rutas/About";
import Add from './rutas/Add'

export default function MisRoutes(){
    return (
        <Switch>
            <Route exact path='/' component={Store}/>
            <Route exact path='/Cart' component ={Cart}/>
            <Route exact path='/About' component={About}/>
            <Route exact path='/Add' component={Add}/>
        </Switch>
    );
}