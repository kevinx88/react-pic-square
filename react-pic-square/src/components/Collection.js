import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: ['http://i.imgur.com/MKVdVoH.png', 'http://i.imgur.com/mMaGd6q.jpg', 'http://i.imgur.com/keiDwzq.png']
        }
    }



    // componentDidMount() {
    //     axios
    //     .get("http://myapi-profstream.herokuapp.com/api/202dbe/wines")
    //     .then((response) => {
    //         this.setState({
    //             squares: response.data
    //         });
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }



    render() {
        return (
            <div>
                <div className="collection-container">
                    { this.state.squares.map((square, index) => {
                        return (
                            <div key={index} className="collection-square">
                                <img src={square} className="img-responsive" />
                                <h4>collection here</h4>
                            </div>
                        );
                    }) }
                </div>
            </div>
        );
    }
}

export default Collection;
