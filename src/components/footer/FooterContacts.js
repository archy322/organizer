import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {withBaseIcon} from 'react-icons-kit'
import {linkedin} from 'react-icons-kit/icomoon/linkedin';
import {facebook2} from 'react-icons-kit/icomoon/facebook2';
import {vk} from 'react-icons-kit/icomoon/vk';
import {telegram} from 'react-icons-kit/icomoon/telegram';


const SocialIconContainer = withBaseIcon({size: 24, style: {color: '#FFFFFF'}});

export function FooterContacts() {
    return (
        <div className='d-flex w-25 flex-column justify-content-around text-light contacts'>
            <div className='d-flex w-100 justify-content-between '>
                <span className='alert-link '>Social Media:</span>
                <SocialIconContainer icon={vk}/>
                <SocialIconContainer icon={facebook2}/>
                <SocialIconContainer icon={linkedin}/>
                <SocialIconContainer icon={telegram}/>
            </div>
            <div className='d-flex w-100 justify-content-between'>
                <span className='alert-link '>Contacts:</span>
                <a href="tel: 0952113771" className='phone badge badge-light'>+38(095)211-37-71</a>
                <a href="tel: 0952113771" className='phone badge badge-light'>+38(095)211-37-71</a>
            </div>
        </div>
    )
}

