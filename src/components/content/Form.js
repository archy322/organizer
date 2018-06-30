import React, {Component} from 'react';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            emailValue: '',
            passValue: '',
            isRemembering: false
        };
        this.url = 'https://5b3643ec6005b00014c5dcf2.mockapi.io/users';
    }

    handleSubmit = (event) => {
        const email = this.emailInput.value;
        const pass = this.passInput.value;
        const rememberCheckBox = this.rememberInput.getAttribute('checked');

        event.preventDefault();
        Axios.post(this.url, {
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: `email=${email}&password=${pass}&remember-me=${rememberCheckBox}`
        })
            .then((response) => {
                console.log('Request succeeded with JSON response', response);
                window.location.hash = '/user';
                window.replace();
            }).catch((error) => {
            this.emailInput.className += ' is-invalid';
            this.passInput.className += ' is-invalid';
            this.submitBtn.className = 'btn btn-danger';
            this.submitBtn.style.background = 'red';
            console.log('Request failed', error);
        });
    };
    handleChange = (event) => {
        const target = event.target;
        switch (target.type){
            case 'email':
                this.setState({emailValue: event.target.value});
                break;
            case 'password':
                this.setState({passValue: event.target.value});
                break;
            case 'checkbox':
                this.setState({isRemembering: !this.state.isRemembering});
                break;
        }
    };

    render() {
        return (
            <main className='d-flex w-100 justify-content-center align-items-center'>
                <form className='w-25'>
                    <div className='form-group'>
                        <label htmlFor='exampleInputEmail1' className='text-light'>Email address</label>
                        <input type="email" className='form-control' id='inputEmail'
                               aria-describedby='emailHelp'
                               placeholder='Enter email'
                               ref={(input)=> this.emailInput = input}
                               value={this.state.emailValue}
                                onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1' className='text-light'>Password</label>
                        <input type='password' className='form-control' id='inputPassword'
                               placeholder='Password'
                               value={this.state.passValue}
                               ref={(input)=> this.passInput = input}
                               onChange={this.handleChange}/>
                    </div>
                    <div className='form-group form-check'>
                        <input type='checkbox'
                               className='form-check-input'
                               id='check'
                               onChange={this.handleChange}
                               ref={(input)=> this.rememberInput = input}/>
                        <label className='form-check-label text-light' htmlFor='check'>Remember me</label>
                    </div>
                    <button
                        type='submit'
                        className='btn btn-warning'
                        id='signBtn'
                        ref={(button)=> this.submitBtn = button}
                        onClick={this.handleSubmit}>
                        Sign in
                    </button>
                </form>
            </main>
        );
    }
}

export default Form;
