import React from 'react'
import { Component } from 'react';
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Textarea from 'react-textarea-autosize';

import './entry.css'


class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: ""
    }

    this.handleSubmit = event => {
      event.preventDefault();
      let data = event.target;
      let newComment = {
        author: localStorage.getItem('user'),
        title: data.title.value,
        text: data.text.value
      };
      this.props.addNewComment(newComment);
    }
  }
  render() {
    return (<div className="entry-form">
      <Jumbotron>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="form-group" >
              <Input type="text" className="form-control" id="entry-name" name="title" placeholder="Title" />
            </FormGroup>
            <hr />
            <FormGroup className="form-group">
              <Textarea className="form-control" id="entry-body" type="textarea" name="text" placeholder='Write about your day...' />
            </FormGroup>
            <Button type="submit" color="#2800B2">Submit</Button>
            <FormGroup className="form-group private-check">
              <input type="checkbox" id="private-square" name="public" />
              <Label for="exampleText">Post this to the forums</Label>
            </FormGroup>
          </Form>
        </Container>
      </Jumbotron>
    </div>);

  }
}

export default NewComment;