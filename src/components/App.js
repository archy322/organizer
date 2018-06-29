import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Form from './content/Form';
import Header from './header/Header';
import Footer from './footer/Footer';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Header/>
                <Form/>
                <Footer/>
            </div>
        );
    }
}

export default App;
