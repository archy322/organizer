import React, {Component} from 'react';
import LoggedUserPage from "./LoggedUserPage/LoggedUserPage";
import HomePage from './HomePage/HomePage';
import { Router, Route, hashHistory } from 'react-router';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
               <Router history={hashHistory}>
                   <Route path='/' component={HomePage}/>
                   <Route path='/user' component={LoggedUserPage}/>
               </Router>
            </div>
        );
    }
}

export default App;
