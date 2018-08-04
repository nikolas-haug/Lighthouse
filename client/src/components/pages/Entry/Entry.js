import React from 'react'
import Textarea from 'react-textarea-autosize';
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './entry.css'

// const Entry = (props) => {

//     return (
//         <div>
//             <form>
//                 <div className="form-group">
//                     <input type="text" className="form-control" id="entry-name" placeholder="Name this entry" />
//                 </div>
//                 <hr />
//                 <div className="form-group">
//                     <Textarea className="form-control" id="entry-body" placeholder='Write about your day...'/>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }

const Entry = (props) => {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
          <Form>
        <FormGroup className="form-group">
          <Label>Entry Title</Label>
          <Input type="text" className="form-control" id="entry-name" placeholder="Name this entry" />
        </FormGroup>

        <FormGroup className="form-group">
          <Label>Journal Entry</Label>
          <Input className="form-control" id="entry-body" placeholder='Write about your day...' />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
          </Container>
        </Jumbotron>
      </div>
    );
  };

export default Entry;
