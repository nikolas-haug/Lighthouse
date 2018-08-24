import React from "react";
import { Component } from 'react';
import ShowUserJournals from './Show'
import API from '../../../API/messenger';
import Header from "../Sections/Header";
import Dashboard from "./Dashboard";

class Journal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [],
            assessmentData: [],
        };

        this.getAllUserEntries = () => {
            let author = localStorage.getItem('litH@user')
            API.getAllUserEntries(author).then(res => {
                if (res.data) {
                    // Set the state with the results from the search
                    this.setState({
                        entries: res.data
                    })
                } else {
                    return;
                }
            })
        }

        this.getAssessmentData = () => {
            let user_id = localStorage.getItem('litH@user_id')
            API.getAssessmentData(user_id).then(res => {
                if (res.data) {
                    // Set the state with the results from the search
                    this.setState({
                        assessmentData: res.data
                    })
                } else {
                    return;
                }
            })
        }


        // This method handles entry deletion
        this.handleDeleteEntry = (entry_id) => {
            API.sendDeleteEntryInfo(entry_id).then(() => {
                this.getAllUserEntries();
            }).catch(err => console.log(err));
        }
    }
    render() {
        return (
            <div>
                <Header heading="My Journals" title="Track your routine" />
                <div className="container">
                    <div className="row">
                       
                            {this.state.assessmentData.length?
                            <Dashboard
                            getAssessmentData={this.getAssessmentData}
                            assessmentData={this.state.assessmentData}
                            />:""}
                            <ShowUserJournals
                                handleDeleteEntry={this.handleDeleteEntry}
                                getAllUserEntries={this.getAllUserEntries}
                                getAssessmentData={this.getAssessmentData}
                                assessmentData={this.state.assessmentData}
                                entries={this.state.entries}
                                history={this.props.history}
                            />                           
                    </div>
                </div>
            </div>

        );
    }
}
export default Journal;

