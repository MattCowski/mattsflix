import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux'
import ResultsTable from './ResultsTable'

const onChange = (e)=> console.log(e.target.value)




class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Search for a movie by Title, Director, and Actor</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <label>
          Search:
          <input
            type="text"
            placeholder="Search..."
            onChange={onChange}
          />
        </label>

        <h2>Results</h2>
        <ResultsTable/>
      </div>
    );
  }
}

export default App;
