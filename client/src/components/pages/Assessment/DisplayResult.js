import React from 'react';
import loader from '../../../Images/loader.gif'
import Title from './Title';


const DisplayResult = (props) => {
    return (
    <div>
        {!props.result?
        <div>
            <Title title="Assessment Questionnaire"/>          
            <div className='loading-div'>  
                <h5 className="loading-message">Please wait! Your results are being processed....</h5>
                <div className="loading-image-box mx-auto">                 
                    <img src={loader} className="mx-auto img-fluid" alt="loader"/>
                </div>
            </div>
        </div>
        :
         <div className='result-div'>
            <Title title="Assessment Result"/>
            <div className="diagnosis-div">
                <h3 >Provisional Diagnosis*</h3>
                <hr/>
                <p >{props.result.PD}</p>
                <span>* Not a clinical diagnosis.</span>
            </div>
            <div className="treatment-div">
                <h3>Some treatment you might consider...</h3>
                <hr/>
                <p>{props.result.TR}</p>
            </div>
        </div>}
    </div>
    );
}

export default DisplayResult;


