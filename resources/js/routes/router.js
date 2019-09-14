import React from 'react';
import { Router, Route, Switch } from 'react-router'

// import there all you application components
import Home from '../components/Home';

// define there all you application routes
const router =
    <Route exact path="/" component={Home} id="root" />
;

export default router;


