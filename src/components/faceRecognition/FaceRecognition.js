import React, { Component } from 'react';

class FaceRecognition extends Component {
    render() {
        return (
            <div className='center ma'>
                <div className='absolute mt2'>
                    <img src={this.props.imageURL} alt='' width='500px' height='auto'/>
                </div>
            </div>
        )
    }
}

export default FaceRecognition;