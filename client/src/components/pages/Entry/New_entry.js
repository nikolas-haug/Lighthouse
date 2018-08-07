import React from 'react'
import { Component } from 'react';
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './entry.css'


class NewEntry  extends Component {
  constructor(props) {
    super(props);
    this.state={
      title:"",
      text:""
    }
   
    this.handleSubmit = event => {
      event.preventDefault();
      let data = event.target;
      let newEntry = {
          title: data.title.value,
          text: data.text.value
      };
      this.props.addNewEntry(newEntry);
    }
  }
  render( ) { 
    return (  <div className="entry-form">
    <Jumbotron>
      <Container>
  <Form onSubmit={this.handleSubmit}>
        <FormGroup className="form-group" >
          <Label>Title</Label>
          <Input type="text" className="form-control" id="entry-name" name="title" placeholder="Add a title" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="exampleText">Journal Entry</Label>
          <Input className="form-control" id="entry-body" type="textarea" name="text" placeholder='Write about your day...' />
        </FormGroup>

        <Button type="submit" color="#2800B2">Submit</Button>
  </Form>
      </Container>
    </Jumbotron>
  </div> );
  }
}
 
export default NewEntry;