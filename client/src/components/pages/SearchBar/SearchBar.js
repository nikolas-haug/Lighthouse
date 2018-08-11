import React, {Component} from 'react';
import Input from "./Input";
import Results from "./Results";
import API from "../../../API/messenger";

class SearchBar extends Component {

    state = {
        searchTerm: "",
        results: []
    }

    handleInputChange = (event) => {
        // Here we create syntax to capture any change in text to the query terms (pre-search).
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
        console.log(newState);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        API.getCustomArticles(this.state.searchTerm).then((res) => {
            this.setState({
                results: res.data.items,
                searchTerm: ""
            });
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <Input handleChange={this.handleInputChange} searchTerm={this.state.searchTerm}/>
                </form>
                {/* TO DO - THIS NEEDS TO RENDER ON A DIFFERENT PAGE */}
                <div>
                    <Results results={this.state.results}/>
                </div>
            </div>
        )
    }

}

export default SearchBar;