import React from 'react';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

// import there all you application components
import Home from '../components/Home';
import CompanyCreate from '../components/company/CompanyCreate';
import CompanyIndex from '../components/company/CompanyIndex';
import ContactPersonIndex from '../components/contactperson/ContactPersonIndex';
import ContactPersonCreate from '../components/contactperson/ContactPersonCreate';

const history = createBrowserHistory();

// define there all you application routes

const createRouters = () => (
    <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/cabinet/company/create" component={CompanyCreate} />
        <Route exact path="/cabinet/company" component={CompanyIndex} />

        <Route exact path="/cabinet/contactperson" component={ContactPersonIndex} />
        <Route exact path="/cabinet/contactperson/create" component={ContactPersonCreate} />

    </Router>
);


export default createRouters;


