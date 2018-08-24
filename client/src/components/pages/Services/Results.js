import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const showResults = results =>
  results.map(provider => {
    // loop through the array of returned results from the api and display it on the page
    return (
<<<<<<< HEAD
      <div key={provider.practices[0].uid}>
        <Card>
          <CardBody>
            <CardTitle>{provider.practices[0].name}</CardTitle>
            <CardSubtitle className="text-justify">
              {provider.profile.bio}
            </CardSubtitle>
            <br />
            <CardText>
              <div className="row">
                <div className="col-6">
                  {provider.practices[0].visit_address.street} &bull;{" "}
                  {provider.practices[0].visit_address.city} &bull;{" "}
                  {provider.practices[0].visit_address.zip}
                </div>
                <div className="col-6 text-right">
                  <a href={`tel: ${provider.practices[0].phones[0].number}`}>
                    {provider.practices[0].phones[0].number}
                  </a>
                </div>
              </div>
              {provider.practices[0].website && (
                <div className="mt-1">
                  <a href={provider.practices[0].website} target="_blank">
                    {provider.practices[0].website}
                  </a>
                </div>
              )}
            </CardText>
=======
        <div key={provider.practices[0].uid}>
            <Card>
                <CardBody>
                    <CardTitle>{provider.practices[0].name}</CardTitle>
                    <CardSubtitle className="text-justify">{provider.profile.bio}</CardSubtitle>
                    <br />
                    <CardText><div className="row">
                        <div className="col-6">{provider.practices[0].visit_address.street} &bull; {provider.practices[0].visit_address.city} &bull; {provider.practices[0].visit_address.zip}</div>
                            <div className="col-6 text-right"><a href={`tel: ${provider.practices[0].phones[0].number}`}>{provider.practices[0].phones[0].number}</a>
                            </div>
                        </div>
                            {provider.practices[0].website && 
                            <div className="mt-1">
                                <a href={provider.practices[0].website} target="_blank">{provider.practices[0].website}</a>
                            </div>
                            }
                        </CardText>
>>>>>>> a0d49d76ffcfc9a2452c9651e2edfe3fafeec15d

            <CardText>
              <div className="row" />
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  });

<<<<<<< HEAD
const Results = props => {
  // check that there are results returned to the array, otherwise display nothing
  return (
    <div>
      <div>
        {props.results.length > 0 && (
          <div className="pl-3">
            <h2 className="mb-0 pt-3">
              {props.results.length} Providers found
              <i class="fa fa-user-md" />
            </h2>
            <button className="btn-back my-2" onClick={props.handleButtonClick}>
              go back to search
            </button>
          </div>
        )}
        {props.results.length > 0 && showResults(props.results)}
      </div>
    </div>
  );
=======
                        </div></CardText>
                </CardBody>
            </Card>
        </div>
    )
});

const Results = (props) => {
    // check that there are results returned to the array, otherwise display nothing
    return (
        <div>
            <div>
                {props.results.length > 0 && <div className="pl-3"><h2 className="mb-0 pt-3">{props.results.length} Providers found<i class="fa fa-user-md"></i></h2>
                    <button className="btn-back my-2" onClick={props.handleButtonClick}>go back to search</button></div>}
                {props.results.length > 0 && showResults(props.results)}
            </div>
        </div>
    )
>>>>>>> a0d49d76ffcfc9a2452c9651e2edfe3fafeec15d
};

export default Results;
