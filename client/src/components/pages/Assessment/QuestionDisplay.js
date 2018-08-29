import React from 'react';
import './assessment.css'


let visible = {visibility:'visible'}
let hidden = {visibility:'hidden'}
function QuestionDisplay(props) {
  return (
  <div>
    <div className="question-div">
      <p>{props.question.number}. {props.question.question}</p>
    </div>
    <div className="option-div">
        <h6>{props.question.number!==9?
          'Please check the best option and click next to continue.':
          'Please check the best option and click submit.'
        }</h6>
        <hr/>
       {props.options.map((option, i) => 
        <div className="custom-control custom-radio" key={i}>
             <input onClick={props.handleOnClick} data-id={i} type="radio" id={"customRadio"+i} name="customRadio" className="custom-control-input"/>
             <label className="custom-control-label" htmlFor={"customRadio"+i}>{option}</label>
        </div>
       )}
       <span id="error-text" style={props.error?visible:hidden}>Please select an option!</span> 
    </div>
  </div>
  );
}


export default QuestionDisplay;