import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



export function FooterCopyright({invisible}) {
    return (
        <div className='text-light'>
            <p className={invisible && 'invisible' || 'font-weight-bold badge badge-dark'} id='copy'>&copy;Tsal Co. 2018 - All rights reserved.</p>
        </div>
    )
}

