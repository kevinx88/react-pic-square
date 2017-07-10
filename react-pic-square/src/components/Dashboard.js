import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Nav';
import PicSquare from './PicSquare';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
                <PicSquare />
            </div>
        );
    }
}

export default Dashboard;
