import React from 'react';
import {Component} from 'react';
import questions from './question';
import QuestionDisplay from './QuestionDisplay';
import StartButton from '../Sections/StartButton';
import Result from './ResultGenetator'
import DisplayResult from './DisplayResult';

class Assessment extends Component {
    constructor(props){
        super(props);
        this.state = {
            number:0,
            question:'',
            response:'',
            result:'',
        }
        
        this.assessmentData = [];
        this.tracker = 0;
        this.responseOptions = ["Not at all","Several days","More than half of the days","Nearly every day"];

        this.getQuestion = () => {
            let question = questions[this.tracker];
            this.setState({
                number:question.number,
                question:question.question
                })    
        }

        this.handleOnChange = (e) => {
            let option = e.target.getAttribute('data-id')
            let response = Number(option)
                this.setState({
                    response:response,
                })
        }

        this.handleSubmit = (e) => {
            this.assessmentData.push(this.state.response);
            e.preventDefault()
            if(this.assessmentData.length <= 8){
                this.tracker++
                e.target.reset()
                this.getQuestion()
            }else{
                let assessmentScore = Result.generateResult(this.assessmentData)
                let result = Result.getResultInfor(assessmentScore)
                this.setState({
                    result:result,
                    question:''
                }) 
            }
        }
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-8 col-sm-12 col-xs-12 mx-auto">
                    {this.state.question?
                    <div>
                        <div>
                            <h2 className="assessement-title">Assessment Questionnaire</h2>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                            <QuestionDisplay 
                                options={this.responseOptions}
                                handleOnChange={this.handleOnChange}
                                question={this.state}
                            /> 
                            <div className="button-div">
                                <button className="btn-light"><a href="/assessment">Cancel</a></button>
                                {this.state.number===9?
                                <button type="submit" className="btn-light">Submit</button>:
                                <button type="submit" className="btn-light">Next</button>
                                }
                            </div>
                            </form>
                        </div>
                    </div>:
                    this.state.result?
                    <DisplayResult result={this.state.result}/>:
                        <StartButton onClick={this.getQuestion}/>
                    }</div>
                </div>
            </div>
        )
    }
}

export default Assessment;