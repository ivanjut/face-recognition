import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import NavBar from './components/navbar/NavBar';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from "./components/rank/Rank";
import FaceRecognition from './components/faceRecognition/FaceRecognition';

const app = new Clarifai.App({
    apiKey: '9f107e133e3c48e7a8a26bef610770e9'
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageURL: '',
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    };

    onSubmit = () => {
        this.setState({imageURL: this.state.input});
        app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input).then(
            function(response) {
                console.log(response);
            },
            function(err) {
                console.log(err);
            }
        );
    };

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
                <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                <FaceRecognition imageURL={this.state.imageURL}/>
            </div>
        );
    }
}

export default App;
