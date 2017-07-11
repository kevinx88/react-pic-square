import React, { Component } from "react";
import Dropzone from "react-dropzone";
import request from "superagent";

const CLOUDINARY_UPLOAD_PRESET = 'bmzjbxoq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/react-cloudinary/upload';

class PicSquare extends Component {
    constructor(props) {
        super(props);
    }

    handlSubmit(event) {
        event.preventDefault();

        $("#btnSave").click(function() {
            html2canvas($("#picSquare"), {
                onrendered: function(canvas) {
                    document.body.appendChild(canvas);

                    canvas.toBlob(function(blob) {
                        console.log(blob);
                        saveAs(blob, "Dashboard.png");
                    });
                }
            });
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div id="square-instruction">
                    Drag & drop your images here
                </div>
                <form onSubmit={this.handlSubmit.bind(this)}>
                    <div className="square-container" id="picSquare">
                        <div onChange={this.handleChange.bind(this)} className="pic-square">
                        </div>
                        <div onChange={this.handleChange.bind(this)} className="pic-square">
                        </div>
                        <div onChange={this.handleChange.bind(this)} className="pic-square">
                        </div>
                        <div onChange={this.handleChange.bind(this)} className="pic-square">
                        </div>
                    </div>
                    <button type="submit" id="btnSave" value="Save PNG" >Submit</button>
                </form>
            </div>
        );
    }
}

export default PicSquare;
