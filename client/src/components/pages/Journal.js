import React from "react";
import { Component } from 'react';

class  Journal extends Component {
  state = {  }
  render() { 
    return ( 
  <div className="card">
        <div className="card-header">
          <h3>My Journals</h3>
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

);
  }
}
export default Journal;

