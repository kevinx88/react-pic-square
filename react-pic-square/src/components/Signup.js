import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        browserHistory.push('/');
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="board-container">
                        <div className="signup-section">
                            <h1 className="main-text">SIGN UP</h1>
                            <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
                                <div>
                                    <input onChange={this.handleChange.bind(this)} name="first_name" type="text" value={this.state.first_name} placeholder="First Name"/>
                                </div>
                                <div>
                                    <input onChange={this.handleChange.bind(this)} name="last_name" type="text" value={this.state.last_name} placeholder="Last Name"/>
                                </div>
                                <div>
                                    <input onChange={this.handleChange.bind(this)} name="email" type="text" value={this.state.email} placeholder="Email"/>
                                </div>
                                <div>
                                    <input onChange={this.handleChange.bind(this)} name="password" type="text" value={this.state.password} placeholder="Password"/>
                                </div>
                                <div className="submit-signup">
                                    <button type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        <Link className="link" to={`/login`}>
                            <div className="login-section login-section-gray" >
                                <h1 className="sub-text">LOG IN</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
