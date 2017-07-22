import React, { Component } from 'react';
import { Link } from 'react-router';

class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squares: ['http://i.imgur.com/MKVdVoH.png', 'http://i.imgur.com/mMaGd6q.jpg', 'http://i.imgur.com/keiDwzq.png']
        }
    }

    destroySquare(index) {
        event.preventDefault();

        this.state.squares.splice(index, 1);
        this.setState({
            squares: this.state.squares
        });
    }

    render() {
        return (
            <div>
            <div className="collection-container">
                { this.state.squares.map((square, index) => {
                    return (
                        <div key={index} className="collection-square">
                            <img src={square} className="img-responsive" />
                            <h5>squares collection here</h5>
                            <a onClick={this.destroySquare} href="#" className="collection-remove">x</a>
                        </div>
                    );
                }) }
            </div>
            </div>
        );
    }
}

export default Collection;
