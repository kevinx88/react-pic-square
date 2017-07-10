import React, { Component } from 'react';

class PicSquare extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <div className='pic-square'>
                    Drag & drop your images here
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default PicSquare;
