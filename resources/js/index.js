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

import router from "./routes/router";

const history = createBrowserHistory();
const store = createStore(allReducers);
store.subscribe(() => console.log(store.getState()))

// console.log(router);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            { router }
        </Router>
    </Provider>, 
    document.getElementById(router.props.id)
)