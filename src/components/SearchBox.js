import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps)=>{
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      console.log(e.target.value)
      // dispatch(setVisibilityFilter(ownProps.filter))
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
