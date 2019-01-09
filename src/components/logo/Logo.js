import React, { Component } from 'react';
import './logo.css';
import brain from './brain.png';
import Tilt from 'react-tilt';

class Logo extends Component {
    render() {
        return (
            <div className='ma4 mt0'>
                <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                    <div className="Tilt-inner"><img alt='brain' src={brain}/></div>
                </Tilt>
            </div>
        )
    }
}

export default Logo;