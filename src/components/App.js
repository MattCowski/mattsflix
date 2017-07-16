import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import ResultsTable from './ResultsTable'
import SearchBox from './SearchBox'
import MovieDetails from './MovieDetails'
import GenreButton from './GenreButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Matt's Flix!</h2>
        </div>
        <p className="App-intro">
          Search for a movie by Title, Director, and Actor
        </p>
        <GenreButton/>
        <SearchBox/>

        <h2>Results</h2>
        <ResultsTable/>
        <MovieDetails/>
      </div>
    );
  }
}

export default App;
