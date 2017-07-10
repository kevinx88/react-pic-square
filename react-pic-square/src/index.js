//Use ReactDom to render virtual DOM to real DOM
import React from 'react';
import ReactDom from 'react-dom';
import { Route, Router, browserHistory } from 'react-router';

//Application assets
import './assets/css/style.css';
import './assets/js/main.js';

import Dashboard from './components/Dashboard';

ReactDom.render(
    <Router history={browserHistory}>
        <Route path="/" component={Dashboard} />
    </Router>
,document.getElementById('app'));
