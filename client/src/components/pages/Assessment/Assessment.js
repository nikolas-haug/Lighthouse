import React from 'react';
import {
    Component
} from 'react';
import questions from './question';
import QuestionDisplay from './QuestionDisplay';
import StartButton from './StartButton';
import Result from './ResultGenetator'
import DisplayResult from './DisplayResult';
import Title from './Title';
import API from '../../../API/messenger'

class Assessment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            question: '',
            response: '',
            result: '',
            loader: false,
            error: false,
        }

        this.assessmentData = [];
        this.tracker = 0;
        this.responseOptions = ["Not at all", "Several days", "More than half of the days", "Nearly every day"];

        this.getQuestion = () => {
            let question = questions[this.tracker];
            this.setState({
                number: question.number,
                question: question.question
            })
        }

        this.handleOnChange = (e) => {
            let option = e.target.getAttribute('data-id')
            this.setState({
                response: Number(option),
                error:false
            })
        }

        this.handleSubmit = (e) => {
            this.setState({error:false})
            e.preventDefault()
            if(this.state.response === ''){
                this.setState({error:true})
                return;
            }
            this.assessmentData.push(this.state.response);
            if (this.assessmentData.length <= 8) {
                this.tracker++
                e.target.reset()
                this.setState({response:''})
                this.getQuestion()
            } else {
                let result = Result.generateResult(this.assessmentData)
                this.setState({
                    question: '',
                    loader: true,
                })
                let user_id = localStorage.getItem("litH@user_id")
                API.sendAssessmentResult(user_id, result).then((res) => {
                    setTimeout(() => {
                        this.setState({
                            result: result,
                            loader: false
                        })
                    }, 4000);
                })
            }
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-8 col-sm-12 col-xs-12 mx-auto">
                    {this.state.question?
                    <div>
                        <Title title="In the past two weeks, how often have you experienced the following symptoms?"/>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                            <QuestionDisplay 
                                options={this.responseOptions}
                                handleOnChange={this.handleOnChange}
                                question={this.state}
                                error={this.state.error}
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
                    this.state.loader || this.state.result?
                    <DisplayResult result={this.state.result}/>:
                        <StartButton onClick={this.getQuestion}/>
                    }</div>
                </div>
            </div>
        )
    }
}

export default Assessment;