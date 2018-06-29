import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {HeaderLogo} from './HeaderLogo';
import {HeaderUser} from './HeaderUser';

class Header extends Component {
    constructor({invisible}){
        super({invisible});
    }
    render() {
        return (
            <header className='d-flex w-100 justify-content-between'>
                <HeaderLogo/>
                <HeaderUser invisible={this.props.invisible && true || false}/>
            </header>
        );
    }
}

export default Header;
