import React from 'react';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

// import there all you application components
import Home from '../components/Home';
import CompanyCreate from '../components/company/CompanyCreate';
import CompanyIndex from '../components/company/CompanyIndex';
import CompanyOperatorCreate from '../components/company/CompanyOperatorCreate';
import ContactPersonIndex from '../components/contactperson/ContactPersonIndex';
import ContactPersonCreate from '../components/contactperson/ContactPersonCreate';

const history = createBrowserHistory();

// define there all you application routes

const createRouters = () => (
    <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/company/create" component={CompanyCreate} />
        <Route exact path="/admin/company" component={CompanyIndex} />

        <Route exact path="/admin/operator/create" component={CompanyOperatorCreate} />

        <Route exact path="/admin/contactperson" component={ContactPersonIndex} />
        <Route exact path="/admin/contactperson/create" component={ContactPersonCreate} />

    </Router>
);


export default createRouters;


