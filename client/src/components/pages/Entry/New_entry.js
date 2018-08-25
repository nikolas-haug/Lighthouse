import React from 'react'
import { Component } from 'react';
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Textarea from 'react-textarea-autosize';

import './entry.css'
let visible = {visibility:'visible'}
let hidden = {visibility:'hidden'}

class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleError: true,
      textError: true,
      text: '',
      title: ''
    }

    this.handleOnChange = (e) => {
      let target = e.target;
      let value = target.value;
      let name  = target.name;
      this.setState({
          [name]:value,
          titleError:this.state.title.length?false:true,
          textError:this.state.text.length?false:true
      })
  }

    this.handleSubmit = event => {
      event.preventDefault();
      if(this.state.textError || this.state.titleError ){
          return;
      }
      let data = event.target;
      let newEntry = {
        author: localStorage.getItem('litH@user'),
        public: data.public.checked,
        title: data.title.value,
        text: data.text.value
      };
      this.props.addNewEntry(newEntry);
    }
  }
  render() {
    let valid = "is-valid form-control ";
    let invalid = "is-invalid form-control";
    console.log(this.state)
    return (<div className="entry-form">
      <Jumbotron>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup className="form-group" >
              <Input onChange={this.handleOnChange} type="text" 
                className={this.state.titleError?invalid:valid} id="entry-name" name="title" placeholder="Title" value={this.state.title}/>
            </FormGroup>
            <hr />
            <span className="error-text" style={this.state.titleError?visible:hidden}>Title is required for all post.</span>
            <FormGroup className="form-group">
              <Textarea onChange={this.handleOnChange} 
                className={this.state.textError?invalid:valid} id="entry-body" type="textarea" name="text" placeholder='Write about your day...' value={this.state.text}/>
              <span className="error-text" style={this.state.textError?visible:hidden}>This field cannot be empty.</span>
              </FormGroup>
            <Button type="submit" color="#2800B2" className="entry-btn btn btn-primary">Submit</Button>
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

export default NewEntry;