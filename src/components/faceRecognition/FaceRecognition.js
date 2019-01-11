import React, { Component } from 'react';
import './faceRecognition.css';

class FaceRecognition extends Component {
    render() {
        return (
            <div>
                <img id='inputimage' src={this.props.imageURL} alt='' width='500px' height='auto'/>
                {this.props.boxes.map((box, i) => <div className='bounding-box' key={i}
                      style={{left: box.leftCol, top: box.topRow, width: box.width, height: box.height}}/>)}
            </div>
        )
    }
}

export default FaceRecognition;