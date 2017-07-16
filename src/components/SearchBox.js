import React from 'react';
import { connect } from 'react-redux'
import { fetchMovies } from '../actions'

const mapStateToProps = (state, ownProps)=>{
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(fetchMovies(e.target.value, 'actor'))
    }
  }
}


const SearchBox = connect(mapStateToProps, mapDispatchToProps)(
  ({onChange, value})=>
    <div>
      <label>
        Search:
        <input
          type="text"
          placeholder="Search..."
          onChange={onChange}
        />
      </label>
      <code>{value}</code>
    </div>
)

export default SearchBox
