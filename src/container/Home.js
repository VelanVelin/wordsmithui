
import React, { Component } from 'react';
// import { connect } from 'react-redux'
import AddSentence from '../components/AddSentence'
import SentenceList from '../components/SentenceList'

class Home extends Component{
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-2">
                    <h2>Add a new sentence</h2>
                    <AddSentence />
                </div> 
                <div className="col-md-4">
                    <h2>List of sentences</h2>
                    <SentenceList />
                </div>
            </div>  
        </div>
        );
    }
}

export default (Home);
