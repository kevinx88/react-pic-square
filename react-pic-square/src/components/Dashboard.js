import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
            </div>
        );
    }
}

export default Dashboard;
