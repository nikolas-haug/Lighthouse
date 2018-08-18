import React, { Component } from "react";
import API from "../../API/messenger";


class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastSearched: "",
            results: []
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

        if(searchTerm !== this.state.lastSearched) {
            this.getCustomResults(searchTerm);
        }
    }

    // call the custom search api
    getCustomResults = (term) => {
        API.getCustomArticles(term).then((res) => {
            console.log(res.data);
            this.setState({
                lastSearched: term,
                results: res.data
            });
        }).catch((err) => { 
            console.log(err);
        });
    }

    showGoogleResults = results => results.map((item, index) => {
        return (
            <div key={index}>
                <h4><a href={item.link} target="_blank">{item.title}</a></h4>
                <p>{item.snippet}</p>
            </div>
        )  
    });

    showNoResults = () => {
        return (
            <div>
                <h4>No results to display. Please try your search again.</h4>
            </div>
        )
    }

    render() {

        return (
            <div>
                {this.state.lastSearched && (
                    <div>
                        {this.state.results.length > 0 ? this.showGoogleResults(this.state.results) : this.showNoResults()}
                    </div>
                )}
            </div>
        )
    }
}

export default SearchResults;