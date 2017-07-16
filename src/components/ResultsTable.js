import React from 'react';
import { connect } from 'react-redux'
import SearchResultRow from './SearchResultRow'
import { setSelected } from '../actions'

const mapStateToProps = (state, ownProps)=>{
  return {
    ...state,
    results: !state.filter? state.results : state.results.filter(movie=> movie.category==state.filter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResultClick: (movie)=> dispatch(setSelected(movie))
  }
}

const ResultsTable = connect(mapStateToProps, mapDispatchToProps)(
  ({results, message, onResultClick, selected})=>
    message ? <code>{message}</code> : !selected &&
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Rating</th>
          <th>Category</th>
          <th>Poster</th>
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
              category={data.category}
              onResultClick={()=>onResultClick(data)}
             />
           )
        }
      </tbody>
    </table>
)


export default ResultsTable
