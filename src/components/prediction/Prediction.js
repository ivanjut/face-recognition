import React, { Component } from 'react';
import './prediction.css';

class Prediction extends Component {
    render() {
        return (
            <div className='container'>
                <div className='title'>
                    <h3>Demographic Prediction</h3>
                    <h6>Right to left</h6>
                </div>
                {this.props.info.map((person, i) => {
                    return (<div className='predictedPerson' key={i}>
                        <div className='gender'>
                            <div className='section'><h5>Gender Probabilities</h5></div>
                            {person.data.face.gender_appearance.concepts.map((gender, i) => {
                                return (
                                    <div className='element' key={i}>
                                        <span className='attribute'>{gender.name}:</span><span className='value'>{gender.value}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='age'>
                            <div className='section'><h5>Age Prediction</h5></div>
                            <div className='element' key={i}>
                                <span className='attribute'>{person.data.face.age_appearance.concepts[0].name}:</span><span className='value'>{person.data.face.age_appearance.concepts[0].value}</span>
                            </div>
                        </div>
                        <div className='ethnicity'>
                            <div className='section'><h5>Multicultural Appearances</h5></div>
                            {person.data.face.multicultural_appearance.concepts.map((ethnicity, i) => {
                                return (
                                    <div className='element' key={i}>
                                        <span className='attribute'>{ethnicity.name}:</span><span className='value'>{ethnicity.value}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>)
                })}
            </div>
        )
    }
}

export default Prediction;