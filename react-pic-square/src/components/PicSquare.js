import React, { Component } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";


class PicSquare extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div id="square-instruction">
                    Drag & drop your images here
                </div>
                <div className="square-container" id="pic-square">
                    <form action="/" method="post" className="dropzone" id="my-dropzone">
                    </form>
                    <form action="/" method="post" className="dropzone" id="my-dropzone">
                    </form>
                    <form action="/" method="post" className="dropzone" id="my-dropzone">
                    </form>
                    <form action="/" method="post" className="dropzone" id="my-dropzone">
                    </form>
                    <img className="clear-icon" id="clearIcon" src={require('../assets/img/close-round-icon.png')}/>
                </div>
                <button className="save-square-btn" id="saveSquareBtn">
                    <input type="button" id="btnSave" value="Save PNG" />
                    <img className="plus-icon" id="plusIcon" src={require('../assets/img/plus-round-icon.png')}/>
                </button>
            </div>
        );
    }
}

export default PicSquare;
