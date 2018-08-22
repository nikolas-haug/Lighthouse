import React from 'react';
import './assessment.css'

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
             <input onChange={props.handleOnChange} data-id={i} type="radio" id={"customRadio"+i} name="customRadio" className="custom-control-input"/>
             <label className="custom-control-label" htmlFor={"customRadio"+i}>{option}</label>
        </div>
       )}
    </div>
  </div>
  );
}


export default QuestionDisplay;