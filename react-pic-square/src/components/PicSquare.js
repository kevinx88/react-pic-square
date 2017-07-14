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
                </div>
                <input type="button" id="btnSave" value="Save PNG" />
                <div id="canvas-store">
                </div>
                <button className="squareSave">Save Square</button>
            </div>
        );
    }
}

export default PicSquare;
