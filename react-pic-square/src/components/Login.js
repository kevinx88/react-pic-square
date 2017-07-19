import React, { Component } from 'react';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'kevin@kevin.com',
            password: 'kevin',
        }
    }


    handleSubmit(event) {
        event.preventDefault();

        axios.post(`http://localhost:8000/users/login`, {
                email: this.state.email
        })
            .then(user => {
                console.log(user.data);
                window.localStorage.userId = user.data.id;
                browserHistory.push('/');
            })
            .catch(err => console.log(err));

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
                                    <input onChange={this.handleChange.bind(this)} name="email" value={this.state.email} type="email" />
                                </div>
                                <div>
                                    <input onChange={this.handleChange.bind(this)} name="password" value={this.state.password} type="password" />
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
