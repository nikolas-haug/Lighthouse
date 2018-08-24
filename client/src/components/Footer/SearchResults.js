import React, { Component } from "react";
import API from "../../API/messenger";
import loader from '../../Images/loader.gif'
import {
    Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';


class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastSearched: "",
            results: JSON.parse(localStorage.getItem('custom_search_results')) || []
        }
    }

    // call the custom search api using the route params when component mounts
    componentDidMount() {
        this.getCustomResults(this.props.match.params.term);
    }

    // check if a search has already happened before making another api call
    componentDidUpdate() {
        const searchTerm = this.props.match.params.term
        window.scrollTo(0, 0);

        if (searchTerm !== this.state.lastSearched) {
            this.getCustomResults(searchTerm);
        }
    }

    // call the custom search api
    getCustomResults = (term) => {
        API.getCustomArticles(term).then((res) => {
            // if we get a response, place it into local storage
            localStorage.setItem('custom_search_results', JSON.stringify(res.data));
            // console.log(res.data);
            // set the state of the results from the local storage
            this.setState({
                lastSearched: term,
                results: JSON.parse(localStorage.getItem('custom_search_results'))
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    showGoogleResults = results => results.map((item, index) => {
        return (
            <div key={index}>
                <Card>
                    <CardBody>
                        <CardTitle><h4><a href={item.link} target="_blank">{item.title}</a></h4></CardTitle>
                        <CardSubtitle>{item.snippet}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        )
    });

    showNoResults = () => {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle><h4>No results to display. Please try your search again.</h4></CardTitle>
                    </CardBody>
                </Card>
                
            </div>
        )
    }

    render() {

        return (
            <div>
<<<<<<< HEAD
                {this.state.lastSearched ? (
=======
                {this.state.lastSearched && (
>>>>>>> a0d49d76ffcfc9a2452c9651e2edfe3fafeec15d
                    <div className="container results-container pb-3">
                    {this.state.results.length > 0 && <h2 className="pb-3 pt-4 mb-0"><i className="fa fa-envelope-open-o"></i>{this.state.results.length} Results found online:</h2>}
                        {this.state.results.length > 0 ? this.showGoogleResults(this.state.results) : this.showNoResults()}
                    </div>
                ) : (
                    <div>
                      <div className="loading-div">
                        <div className="loading-image-box mx-auto">
                          <img
                            src={loader}
                            className="mx-auto img-fluid"
                            alt="loader"
                          />
                        </div>
                      </div>
                    </div>
                  )}
            </div>
        )
    }
}

export default SearchResults;