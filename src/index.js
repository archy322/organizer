import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import { Router, Route, hashHistory } from 'react-router';
import LoggedUserPage from "./components/LoggedUserPage";


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/home" component={LoggedUserPage}/>
    </Router>,
    document.getElementById('root'));
