import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className='navbar'>
                    <div className='navbar-header'>
                        <div className='navbar-title'>
                            PIC SQUARE
                        </div>
                    </div>
                    <div>
                        <Link className="collection-link" to={`/collection`}>
                            <button className="collection-btn" type="submit">Collection</button>
                        </Link>
                        <Link className="login-link" to={`/login`}>
                            <button className="login-btn" type="submit">Login</button>
                        </Link>
                    </div>
            </nav>
        );
    }
}

export default Nav;
