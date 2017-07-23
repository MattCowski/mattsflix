import React from 'react';
import { connect } from 'react-redux'
import { sortBy } from '../actions'

const mapStateToProps = (state, ownProps)=>{
  return state
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onClick:(e)=> dispatch(sortBy(e.target.id))
  }
}

const SortButton = connect(mapStateToProps, mapDispatchToProps)(
  ({onClick, order, results})=>
  results.length>0 && <label>
    Sort by:
    <button id='rating' onClick={onClick}>{!order? "rating ": order }</button>
  </label>
)

export default SortButton
