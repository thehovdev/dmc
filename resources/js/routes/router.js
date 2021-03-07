import React from 'react';
import { Router, Route, Switch } from 'react-router'
import { createBrowserHistory } from 'history'

// import there all you application components
import Home from '../components/Home';
import UserIndex from '../components/user/UserIndex';
import CompanyCreate from '../components/company/CompanyCreate';
import CompanyIndex from '../components/company/CompanyIndex';
import ContactPersonIndex from '../components/contactperson/ContactPersonIndex';
import ContactPersonCreate from '../components/contactperson/ContactPersonCreate';
import OperatorIndex from '../components/operator/OperatorIndex';
import OperatorCreate from '../components/operator/OperatorCreate';
import RequestIndex from '../components/request/RequestIndex';
import DeclinedRequest from '../components/request/DeclinedRequest';
import RespondedRequest from '../components/request/RespondedRequest';
import UserRequest from '../components/request/UserRequest';


const history = createBrowserHistory();

// define there all you application routes

const createRouters = () => (
    <Router history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin/user" component={UserIndex} />
        <Route exact path="/admin/company" component={CompanyIndex} />
        <Route exact path="/admin/company/create" component={CompanyCreate} />
        <Route exact path="/admin/contactperson" component={ContactPersonIndex} />
        <Route exact path="/admin/contactperson/create" component={ContactPersonCreate} />
        <Route exact path="/admin/operator" component={OperatorIndex} />
        <Route exact path="/admin/operator/create" component={OperatorCreate} />

        <Route exact path="/cabinet/reserve" component={RequestIndex} />
        <Route exact path="/cabinet/reserve/responded" component={RespondedRequest} />
        <Route exact path="/cabinet/reserve/declined" component={DeclinedRequest} />

        <Route exact path="/cabinet/user/reserve" component={UserRequest} />

    </Router>
);


export default createRouters;


