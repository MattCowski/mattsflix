import React from 'react';
import { connect } from 'react-redux'
import { fetchMovies, setField } from '../actions'

const mapStateToProps = (state, ownProps)=>{
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      dispatch(fetchMovies(e.target.value))
    },
    setField: (e) => {
      dispatch(setField(e.target.value))
      dispatch(fetchMovies())
    }
  }
}


const SearchBox = connect(mapStateToProps, mapDispatchToProps)(
  ({onChange, value, field, setField})=>
    <div>
      <select value={field} onChange={setField}>
        <option value="title">title</option>
        <option value="director">director</option>
        <option value="actor">actor</option>
      </select>
      <label>
        Search:
        <input
          type="text"
          placeholder="Search..."
          onChange={onChange}

        />
      </label>
      {/* <code>{value}</code> */}
    </div>
)

export default SearchBox
