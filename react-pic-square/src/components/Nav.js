import React, { Component } from 'react';

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
                        <button className="login-btn" type="submit">Login</button>
                    </div>
            </nav>
        );
    }
}

export default Nav;
