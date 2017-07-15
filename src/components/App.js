import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { connect } from 'react-redux'

const onChange = (e)=> console.log(e.target.value)

const mapStateToProps = (state, ownProps)=>{
  return {
    ...state
  }
}

const SearchResultRow = ({onResultClick, title, rating, category, cast, director, summary, poster})=>
    <tr onClick={onResultClick}>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{category}</td>
      <td><img width="100" src={poster}/></td>
      {/* <td>{summary}</td> */}
      <td>{director}</td>
    </tr>

const ResultsTable = connect(mapStateToProps)(
  ({results})=>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Rating</th>
          <th>Category</th>
          <th>Poster</th>
          <th>Summary</th>
          <th>Director</th>
        </tr>
      </thead>
      <tbody>
        {
          results.map((data, index)=>
            <SearchResultRow
              key={index}
              title={data.show_title}
              poster={data.poster}
              director={data.director}
              rating={data.rating}
              summary={data.summary}
              onResultClick={(e)=>console.log(index)}
             />
           )
        }
      </tbody>
    </table>
)

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
