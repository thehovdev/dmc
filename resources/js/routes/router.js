import React from 'react';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

// import there all you application components
import Home from '../components/Home';
import CreateCompany from '../components/company/CreateCompany';

const history = createBrowserHistory();


// define there all you application routes

const createRouters = () => (
    <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/cabinet/company/create" component={CreateCompany} />
    </Router>
);


export default createRouters;


