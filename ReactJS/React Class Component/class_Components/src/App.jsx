import './App.css'
// import Card from './Card'
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
      <div>
        <hr />
        <p>Student Name: {this.props.name}</p>
        <p>Student Age: {this.props.age}</p>
        <p>Student Address: {this.props.add}</p> <hr />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <h1>Student Details:- </h1>
        <Welcome name="Ram" age={12} add='flatNo.:6, Ghatkopar(W), Mumbai'/>
        <Welcome name="Mukhtar" age={99} add='Sara Ghat, Nashik'/>
      </div>
    );
  }
}

export default App;
