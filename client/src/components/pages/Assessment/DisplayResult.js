import React from 'react';


const DisplayResult = (props) => {
    return (
    <div>
        <div>
            <h1>The results are in!</h1>
        </div>
        <div className="diagnosis-div">
            <h2>Provisional Diagnosis*</h2>
            <p>{props.result.PD}</p>
            <p>*Not a clinical diagnosis.</p>
        </div>
        <div className="treatment-div">
        <h2>Some treatment you might consider...</h2>
        <p>{props.result.TR}</p>
        </div>
    </div>
    );
}

export default DisplayResult;


