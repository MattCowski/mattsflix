import React from 'react';
import { connect } from 'react-redux'
import SearchResultRow from './SearchResultRow'


const mapStateToProps = (state, ownProps)=>{
  return {
    ...state
  }
}
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


export default ResultsTable
