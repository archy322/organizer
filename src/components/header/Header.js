import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {HeaderLogo} from './HeaderLogo';

class Header extends Component {
    render() {
        return (
            <header className='d-flex w-100 justify-content-start'>
                <HeaderLogo/>
            </header>
        );
    }
}

export default Header;
