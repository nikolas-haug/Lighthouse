import React from 'react'
import { Component } from 'react';
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import Textarea from 'react-textarea-autosize';
import API from '../../../API/messenger';

import './entry.css'


class EditEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
        public: '',
        title: '',
        text:''
    }
    // this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);

    this.handleEditEntry = () => {
        let entry_id = this.props.match.params.id
        // Takes the submitted data and pass it over to the API module
        API.getEntryToBeEdited(entry_id).then(res => {
            //If res is success
            if (res.data) {
                this.setState({
                        public: res.data.public,
                        title: res.data.title,
                        text:res.data.text
                })
            } 
        }).catch(err => console.log(err));
    }

    this.handleSubmit = e => {
      e.preventDefault();
      let data = e.target;
      let editedEntry = {
        public: data.public.checked,
        title: data.title.value,
        text: data.text.value
      };

      let entry_id = this.props.match.params.id
      API.sendEditedEntryInfo(entry_id, editedEntry).then((res) => {
          if(res.status === 200){
        //If res is success
            // Redirect to ent ry page for now
            this.props.history.push('/entries');
          }
        else {
            // If sign in fails, stay on login
            this.props.history.go('back');
        }
       }).catch(err => console.log(err));
    }
  }

  handleInputChange = (e) => {
    let target = e.target;
    let value = target.value;
    let name  = target.name;
    this.setState({
        [name]:value
    })
}

handleCheckboxChange = (e) => {
    this.setState({
        public:e.target.checked
    })
}

  componentWillMount() {
    this.handleEditEntry() 
}
  render() {
    return (<div className="entry-form">
      <Jumbotron>
        <Container>
          <Form onSubmit={this.handleSubmit}>
          <h3>Edit Post</h3>
            <FormGroup className="form-group" >
              <Input onChange={this.handleInputChange} type="text" className="form-control" name="title" value={this.state.title}/>
            </FormGroup>
            <hr />
            <FormGroup className="form-group">
              <Textarea onChange={this.handleInputChange} className="form-control" type="textarea" name="text" value={this.state.text}/>
            </FormGroup>
            <Link to={'/entries'} color="#2800B2" className="btn btn-default btn-primary">Cancel</Link>
            <Button type="submit" color="#2800B2">Submit</Button>
            <FormGroup className="form-group private-check">
              <input  type="checkbox" id="private-square" name="public" value={this.state.public} />
              <Label for="exampleText">Post this to the forums</Label>
            </FormGroup>
          </Form>
        </Container>
      </Jumbotron>
    </div>);
  }
}

export default EditEntry;