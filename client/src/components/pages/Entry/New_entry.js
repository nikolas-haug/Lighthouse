import React from 'react'
import { Component } from 'react';

import './entry.css'


class NewEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: ""
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
  render() {
    return (<div class="ui grid centered">
      <div class="sixteen wide mobile eight wide tablet twelve wide computer column">
        <div className="ui form">
          <div class="field">
            <label>User Input</label>
            <input type="text" name="title" placeholder="Add a title" />
          </div>
          <div className="field">
            <label>Text</label>
            <textarea name="text" placeholder='Write about your day...'></textarea>
          </div>
          <button class="ui primary button">
            Post
      </button>
          <button class="ui button">
            Cancel
      </button>
        </div>
      </div>
    </div>);
  }
}

export default NewEntry;