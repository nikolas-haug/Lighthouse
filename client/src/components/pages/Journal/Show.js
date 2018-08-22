import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import Moment from "moment";
import Header from "../Sections/Header";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
// import Comments from './Comments/Show_comments';

class ShowUserJournals extends Component {
  constructor(props) {
    super(props);
    this.handleAction = e => {
      e.preventDefault();
      let entry_id = e.target.getAttribute("data-id");
      let action = e.target.getAttribute("action");
      action === "comment"
        ? this.props.handleAddComment(entry_id)
        : this.props.handleDeleteEntry(entry_id);
    };
  }
  componentDidMount() {
    this.props.getAllUserEntries();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="accordion" id="accordionExample">
              <i className="fa fa-file-text-o" aria-hidden="true" />
              <a href="/assessment">Assessment Quiz</a>
              {this.props.entries.map(entry => (
                <Card key={entry._id}>
                  <CardBody>
                    <div id={entry._id} />
                    <CardText>
                      {Moment(entry.createdAt).format("llll")}
                    </CardText>
                    <CardTitle>{entry.title}</CardTitle>
                    <CardText>{entry.text}</CardText>
                    <div>
                      <Link to={"/edit_entry/" + entry._id}>
                        {" "}
                        <button className="entry-btn">Edit Journal</button>
                      </Link>
                      <button
                        className="entry-btn"
                        data-id={entry._id}
                        action="delete"
                        onClick={this.handleAction}
                      >
                        Delete
                      </button>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowUserJournals;
