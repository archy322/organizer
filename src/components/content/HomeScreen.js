import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";

class Form extends Component {
    render() {
        return (
            <main className='d-flex w-100 justify-content-center align-items-center'>
                <div className='w-25'>
                    <p className='w-100 text-light'>
                        Hello, TestUser. You are the first user in this page. Congratulations!
                    </p>
                </div>
            </main>
        );
    }
}

export default Form;
