import React, { Component } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = 'bmzjbxoq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/react-cloudinary/upload';

class PicSquare extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="pic-square" id="picSquare">
                    Drag & drop your images here
                </div>
                <br/>
                <input type="button" id="btnSave" value="Save PNG" />
            </div>
        );
    }
}

export default PicSquare;
