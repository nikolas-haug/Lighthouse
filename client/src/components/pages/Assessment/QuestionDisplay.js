import React from 'react';

function QuestionDisplay(props) {
  return (
  <div className="container">
    <div>
      <p>If you have experienced any of these symptoms in the past two weeks, how difficult have they made it for you to do your work, take care of things at home, or get along with other people.</p>
    </div>
    <div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label className="form-check-label" for="exampleRadios1">
              Not at all
            </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label className="form-check-label" for="exampleRadios1">
              Several days
            </label>
        </div> 
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label className="form-check-label" for="exampleRadios1">
              More than half of the days
            </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
            <label className="form-check-label" for="exampleRadios1">
              Nearly every day
            </label>
        </div>
    </div>
  </div>
  );
}


export default QuestionDisplay;