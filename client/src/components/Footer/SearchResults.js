import React, { Component } from "react";
import API from "../../API/messenger";


class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }
    
    // TO DO - make this talk to the footer component
    componentDidMount() {
        this.setState({
            results: []
        });
        console.log("mounted!");
        console.log(this.state.results);
        console.log(this.props.match.params.term);
        this.getCustomResults(this.props.match.params.term);
    }

    getCustomResults = (term) => {
        API.getCustomArticles(term).then((res) => {
            this.setState({
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
                <div>
                    {this.state.results.length > 0 ? this.showGoogleResults(this.state.results) : this.showNoResults()}
                </div>
            </div>
        )
    }
}

export default SearchResults;