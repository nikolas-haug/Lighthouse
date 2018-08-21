import React from 'react';
import {Component} from 'react';
import questions from './question';
import QuestionDisplay from './QuestionDisplay';
import StartButton from '../Sections/StartButton';


class Assessment extends Component {
    constructor(props){
        super(props);
        this.state = {
            number:0,
            question:'',
            response:''
        }
        
        this.assessmentData = [];
        this.tracker = 0;
        this.responseOptions = ["Not at all","Several days","More than half of the days","Nearly every day"];

        this.getQuestion = () => {
            let question = questions[this.tracker];
            this.setState(question)    
        }

        this.handleOnChange = (e) => {
            let option = e.target.getAttribute('data-id')
            this.setState({
                response:option
            })
        }

        this.handleSubmit = (e) => {
            e.preventDefault()
            this.assessmentData.push(this.state);
            this.assessmentData.length <= 8?
            (this.tracker++,
            e.target.reset(),
            this.getQuestion()):this.generateResult()
        }

      this.generateResult=()=>{
          //console.log(this.assessmentData)
          for(var i = 0; i < this.assessmentData.length; i++ ){
              console.log(this.assessmentData[i].response)
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
                                <a href="/">Cancel <i class="fa fa-undo"></i></a>
                                <button type="submit" className="btn-light">Next<i className="fa fa-angle-double-right"></i></button>
                            </div>
                            </form>
                        </div>
                    </div>
                        :
                            <StartButton onClick={this.getQuestion}/>
                    }</div>
                </div>
            </div>
        )
    }
}

export default Assessment;