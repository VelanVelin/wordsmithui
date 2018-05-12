import React, { Component } from "react";
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {postSentence} from '../actions'
import uuidv1 from "uuid";

const mapDispatchToProps = dispatch => {
    return {
        postSentence: (sentence) => dispatch(postSentence(sentence))
    };
  };
  
class AddSentence extends Component {
    constructor() {
        super();
  
        this.state = {
            text: ""
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
  
    handleSubmit(event) {
        event.preventDefault();
        const { text } = this.state;
        const id = uuidv1();
        this.props.postSentence({id, text});
        this.setState({ text: "" });
    }
    
    render() {
        const { text } = this.state;
        return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <TextField
                id="text"
                hintText="Write away..."
                floatingLabelText="Enter the text you want revered..."
                multiLine={true}
                rows={2}
                onChange={this.handleChange}
                value= {text}
                />
            </div>
            <RaisedButton type="submit" label="REVERSE" disabled={this.state.text === ""} />
        </form>
        );
    }
}


export default connect(null, mapDispatchToProps)(AddSentence)