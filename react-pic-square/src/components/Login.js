import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
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
                        <Link className="link" to={`/signup`}>
                            <div className="signup-section">
                                <h1 className="sub-text">SIGN UP</h1>
                            </div>
                        </Link>
                        <div className="login-section">
                            <h1 className="main-text">LOG IN</h1>
                            <form className="form-container" onSubmit={this.handleSubmit.bind(this)}>
                                <div>
                                    <input onChange={this.handleChange.bind(this)} name="email" value="james@james.com" type="email" />
                                </div>
                                <div>
                                    <input onChange={this.handleChange.bind(this)} name="password" value="james" type="password" />
                                </div>
                                <div className="submit-login">
                                    <button type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
