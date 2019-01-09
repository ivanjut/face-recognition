import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import NavBar from './components/navbar/NavBar';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from "./components/rank/Rank";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Particles className='particles'
                    params={{
                        particles: {
                            number: {
                                value: 100,
                                density: {
                                    enable: true,
                                    value_area: 800
                                }
                            }
                        }
                    }}
                />
                <NavBar/>
                <Logo/>
                <Rank/>
                <ImageLinkForm/>
                {/*<FaceRecognition/>*/}
            </div>
        );
    }
}

export default App;
