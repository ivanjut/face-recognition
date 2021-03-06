import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
// import NavBar from './components/navbar/NavBar';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import FaceRecognition from './components/faceRecognition/FaceRecognition';
import Prediction from "./components/prediction/Prediction";

const app = new Clarifai.App({
    apiKey: '9f107e133e3c48e7a8a26bef610770e9'
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageURL: '',
            boxes: [],
            info: [],
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    };

    calculateFaceLocation = (data) => {
        let regions = [];
        let faces = data.outputs[0].data.regions;
        const image = document.getElementById('inputimage');
        const imageRect = image.getBoundingClientRect();
        const width = Number(image.width);
        const height = Number(image.height);
        for (let face of faces) {
            let bbox = face.region_info.bounding_box;
            regions.push({
                leftCol: imageRect.left + (bbox.left_col * width),
                topRow: imageRect.top + (bbox.top_row * height),
                width: imageRect.left + (bbox.right_col * width) - (imageRect.left + (bbox.left_col * width)),
                height: imageRect.top + (bbox.bottom_row * height) - (imageRect.top + (bbox.top_row * height)),
            })
        }
        return regions;
    };

    displayFaces = (bboxes) => {
        this.setState({boxes: bboxes});
    };

    populateDemographicInfo = (data) => {
        this.setState({info: data.outputs[0].data.regions});
        console.log(data.outputs[0].data.regions);
    };

    onSubmit = () => {
        this.setState({imageURL: this.state.input});
        app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
            .then(response => {
                this.displayFaces(this.calculateFaceLocation(response));
                this.populateDemographicInfo(response);
            })
            .catch(err => console.log(err));
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
                {/*<NavBar/>*/}
                <Logo/>
                <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
                <FaceRecognition imageURL={this.state.imageURL} boxes={this.state.boxes}/>
                <Prediction imageURL={this.state.imageURL} info={this.state.info}/>
            </div>
        );
    }
}

export default App;
