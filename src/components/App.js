import React, {Component} from 'react';
import Form from './content/Form';
import Header from './header/Header';
import Footer from './footer/Footer';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Header invisible={true}/>
                <Form/>
                <Footer/>
            </div>
        );
    }
}

export default App;
