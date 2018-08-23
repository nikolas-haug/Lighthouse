import React from "react";
import Title from './Title'

const StartButton = (props) => {
    return (
        <div>
        <Title title="Assessment Questionnaire"/>
            <div className="diagnosis-div d-flex justify-content-center">
                <button onClick={props.onClick} type="button" className="start-button btn">Click to Start Assessment</button>
            </div>
        </div>
    );
}

export default StartButton;