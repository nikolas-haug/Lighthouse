import React from 'react'
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './entry.css'

const Entry = (props) => {
    return (
      <div className="entry-form">
        <Jumbotron>
          <Container>
          <Form>
        <FormGroup className="form-group">
          <Label>Title</Label>
          <Input type="text" className="form-control" id="entry-name" placeholder="Add a title" />
        </FormGroup>
        <FormGroup className="form-group">
          <Label for="exampleText">Journal Entry</Label>
          <Input className="form-control" id="entry-body" type="textarea" name="text" placeholder='Write about your day...' />
        </FormGroup>

        <Button color="#2800B2">Submit</Button>
      </Form>
          </Container>
        </Jumbotron>
      </div>
    );
  };

export default Entry;
