import React, { Component } from "react";
import axios from "axios";

import Nav from "./Nav";
import PicSquare from "./PicSquare";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    componentDidMount(){
        console.log('mounted');
        axios.get(`http://localhost:8000/users/${window.localStorage.userId}`)
        .then(user => {
console.log(user);
            this.setState({
                username: user.data.first_name
            })
        })
        console.log(this.state.username);
    }

    render() {
        return (
            <div>
                <Nav />
                {this.state.username}
                <PicSquare />
            </div>
        );
    }
}

export default Dashboard;
