import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
class Form extends Component {
    render() {
        return (
            <main className='d-flex w-100 justify-content-center align-items-center'>
                <form className='w-25'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className='text-light'>Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className='text-light'>Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label text-light" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-warning" id='signBtn'>Sign in</button>
                </form>
            </main>
        );
    }
}

export default Form;
