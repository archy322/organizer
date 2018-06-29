import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class Form extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const email = document.getElementById('inputEmail');
        const pass = document.getElementById('inputPassword');
        const rememberCheckBox = document.getElementById('check').getAttribute('checked');
        const url = 'https://5b3643ec6005b00014c5dcf2.mockapi.io/users';
        const status = (response) => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                console.log(response);
                return Promise.reject(new Error(response.statusText))
            }
        };
        const json = (response) => {
            return response.json()
        };

        fetch(url, {
            method: 'post',
            headers: {
                "Content-type": 'application/x-www-form-urlencoded'
            },
            body: `email=${email}&password=${pass}&remember-me=${rememberCheckBox}`
        })
            .then(status)
            .then(json)
            .then((data) => {
                console.log('Request succeeded with JSON response', data);
                window.location.hash = '/home';
                window.replace();
            }).catch((error) => {
            console.log('Request failed', error);
        });
    };

    render() {
        return (
            <main className='d-flex w-100 justify-content-center align-items-center'>
                <form className='w-25'>
                    <div className='form-group'>
                        <label htmlFor='exampleInputEmail1' className='text-light'>Email address</label>
                        <input type="email" className='form-control' id='inputEmail'
                               aria-describedby='emailHelp'
                               placeholder='Enter email'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1' className='text-light'>Password</label>
                        <input type='password' className='form-control' id='inputPassword'
                               placeholder='Password'/>
                    </div>
                    <div className='form-group form-check'>
                        <input type='checkbox' className='form-check-input' id='check'/>
                        <label className='form-check-label text-light' htmlFor='check'>Remember me</label>
                    </div>
                        <button type='submit' className='btn btn-warning' id='signBtn' onClick={this.handleSubmit}>Sign
                            in
                        </button>
                </form>
            </main>
        );
    }
}

export default Form;
