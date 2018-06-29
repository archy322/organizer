import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {FooterContacts} from './FooterContacts';
import {FooterCopyright} from './FooterCopyright';

class Footer extends Component {
    render() {
        return (
            <footer className='d-flex w-100 justify-content-between align-items-center'>
                <FooterCopyright invisible/>
                <FooterCopyright/>
                <FooterContacts/>
            </footer>
        );
    }
}

export default Footer;
