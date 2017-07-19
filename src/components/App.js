import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import ResultsTable from './ResultsTable'
import SearchBox from './SearchBox'
import MovieDetails from './MovieDetails'
import GenreButton from './GenreButton'
import SortButton from './SortButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Matt's Flix!</h2>
          <p className="App-intro">
            Search for a NETFLIX available movie
          </p>
          <div className="Navigation">
            <GenreButton/>
            <SortButton/>
            <SearchBox/>
          </div>
        </div>
        <div className="Results">
          <h2>Results</h2>
          <ResultsTable/>
          <MovieDetails/>
        </div>
      </div>
    );
  }
}

export default App;
