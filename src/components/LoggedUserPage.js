import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HomeScreen from './content/HomeScreen';
import Header from './header/Header';
import Footer from './footer/Footer';

class LoggedUserPage extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Header invisible={false}/>
                <HomeScreen/>
                <Footer/>
            </div>
        );
    }
}

export default LoggedUserPage;
