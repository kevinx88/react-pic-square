//Use ReactDom to render virtual DOM to real DOM
import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

//Application assets
import './assets/css/style.css';
import './assets/css/user_auth.css';
import './assets/js/main.js';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Collection from './components/Collection';

ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/collection' component={Collection} />
    </Router>
,document.getElementById('app'));
