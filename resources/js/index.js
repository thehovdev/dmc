// main application
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// redux 
// redux store
import {createStore} from 'redux';

// providers and reducers
import {Provider} from 'react-redux';
import allReducers from './reducers';
import {combineReducers} from 'redux';
import createRoutes from "./routes/router";

const router = createRoutes()
const history = createBrowserHistory();
const store = createStore(allReducers);
// store.subscribe(() => console.log(store.getState()))

// console.log(router);

const root = document.getElementById('root');

if(root != null) {
    ReactDOM.render(
        <Provider store={ store }>
            {router}
        </Provider>, 
        root
    )
}
