import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@reach/router';
import App from './App';
import SubPage1 from './SubPage1';

ReactDOM.render(
    <Router>
        <App path='/' />
        <SubPage1 path='/subpage1' />
    </Router>, 
    document.getElementById('app'));
