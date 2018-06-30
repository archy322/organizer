import React from 'react';
import { Link } from 'react-router';
import "bootstrap/dist/css/bootstrap.css";

export function HeaderUser({invisible}) {
    return (
        <div className={invisible && 'invisible' || 'd-flex alert  align-items-center text-light'}>
            <p className='alert-link '>
               Welcome TestUser!
            </p>
            <Link to='/'><button className='btn btn-danger btn-sm ml-2 mb-3'>Log Out</button></Link>
        </div>
    )
}

