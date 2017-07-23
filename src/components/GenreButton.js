import React from 'react';
import { connect } from 'react-redux'
import { setFilter } from '../actions'

const mapStateToProps = (state, ownProps)=>{
  const categoryCount = state.results.reduce((a,c,i)=>{
      a[c.category]=a[c.category]? a[c.category]+1 : 1
      return a
    },{})

  return {
    ...state,
    categories: Object.keys(categoryCount)
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onClick:(e)=> dispatch(setFilter(e.target.id))
  }
}

const GenreButton = connect(mapStateToProps, mapDispatchToProps)(
  ({onClick, categories})=>
  categories && <label>
    Filter by:
    {
      categories.map((category)=><button id={category} onClick={onClick}>{category}</button>)
    }
    <button id='X (clear filter)' onClick={onClick}>X (clear filter)</button>
  </label>
)

export default GenreButton
