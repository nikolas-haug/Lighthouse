import React from "react";
import { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import "./footer.css";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            results: []
        }
    }

    handleInputChange = (event) => {

        // TO DO - FIX MULTIPLE SEARCH FUNCTIONALITY WITHOUT RE-ROUTE
        this.props.history.push("/");

        // Here we create syntax to capture any change in text to the query terms (pre-search).
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
        console.log(newState);
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            searchTerm: ""
        });
        let newSearchTerm = this.state.searchTerm;
        this.props.history.push("/custom_search/" + newSearchTerm);
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="push"></div>
                </div>

                <footer className="footer-bs">
                    <div className="row">
                        <div className="col-md-3 footer-brand animated fadeInLeft">
                            <h2>LightHouse</h2>
                            <p>At Lighthouse, we are here to be a beacon of hope for those struggling with mental health issues. We want you to
                            not only find professional help, but also to open your voice to the community and find comfort and support
                            from others that may be struggling in similar ways. Remember, "There is no health without mental health; mental
                            health is too important to bbe left to the professionals alone, and mental health is everyone's business." ~Vikram
                            Patel</p>
                        </div>
                        <div className="col-md-4 footer-nav animated fadeInUp">
                            <h4>Menu —</h4>
                            <div className="col-md-6">
                                <ul className="list">
                                    <li>
                                    <a href="/">About Us</a>
                                    </li>
                                    <li>
                                    <a href="/services">Local Providers</a>
                                    </li>
                                    <li>
                                    <a href="/">Forum</a>
                                    </li>
                                    <li>
                                    <a target="_blank" href="/assets/privacypolicy/pplighthouse.pdf">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 footer-social animated fadeInDown">
                            <h4>Follow Us</h4>
                                <ul>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/LightHouse-Mental-Health-1134742583347086/">Facebook</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://twitter.com/LightHouseMent1">Twitter</a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/lighthousemh/">Instagram</a>
                                </li>
                                </ul>
                            </div>
                        <div className="col-md-3 footer-ns animated fadeInRight">
                            <h4>Search</h4>
                            <p>
                                Search for helpful articles and journals regarding your mental health
                            </p>
                            <div>
                                <form onSubmit={this.handleFormSubmit}>
                                    <Input searchTerm={this.state.searchTerm} handleChange={this.handleInputChange}/>
                                    <Button />
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>

                <section>
                    <p>Copyright &copy 2018</p>
                </section>

            </div>
        )
    }

}

export default Footer;