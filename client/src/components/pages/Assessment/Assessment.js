import React from 'react';
import {Component} from 'react';
import questions from './question';
import QuestionDisplay from './QuestionDisplay';

class Assessment extends Component {
    constructor(props){
        super(props);
        this.state = {
            questions: {
                number: "",
                question: "",
                response: "",
            }
        }
        this.questions = questions;
        this.assessmentData = [];



    }
    render(){
        console.log(this.questions)
        return (<div><QuestionDisplay/></div>)
    }
}

export default Assessment;