import React from "react";

const showGoogleResults = results => results.map((item, index) => {
    
    return (
        <div key={index}>
            <h4><a href={item.link} target="_blank">{item.title}</a></h4>
            <p>{item.snippet}</p>
        </div>
    )  
});

const showNoResults = () => {

    return (
        <div>
            <h4>No results to display. Please try your search again.</h4>
        </div>
    )
}

const Results = (props) => {

  return(
    <div>
        <div>
            {props.results.length > 0 ? showGoogleResults(props.results) : showNoResults()}
        </div>
    </div>
    )
};

export default Results;