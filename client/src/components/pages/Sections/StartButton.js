import React from "react";

const StartButton = (props) => {
    return (
        <div>
        <button onClick={props.onClick} type="button" className="start-button btn">Click to Start Assessment</button>
        </div>
    );
}

export default StartButton;