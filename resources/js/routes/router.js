import React from 'react';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

// import there all you application components
import Home from '../components/Home';
import CreateCompany from '../components/company/CreateCompany';
import CompanyIndex from '../components/company/CompanyIndex';
import EditCompany from '../components/company/EditCompany';

const history = createBrowserHistory();


// define there all you application routes

const createRouters = () => (
    <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/cabinet/company/create" component={CreateCompany} />
        <Route exact path="/cabinet/company" component={CompanyIndex} />
        <Route exact path="/cabinet/company/*/edit" component={EditCompany} />
    </Router>
);


export default createRouters;


