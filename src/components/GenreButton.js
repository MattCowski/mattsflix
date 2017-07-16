import React from 'react';
import { connect } from 'react-redux'
import { setFilter } from '../actions'

const mapStateToProps = (state, ownProps)=>{
  return state
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onClick:(e)=> dispatch(setFilter(e.target.id))
  }
}

const GenreButton = connect(mapStateToProps, mapDispatchToProps)(
  ({onClick})=>
  <label>
    Filter by:
    <button id='Thrillers' onClick={onClick}>Thrillers</button>
    <button id='Cult Movies' onClick={onClick}>Cult Movies</button>
    <button id='Documentaries' onClick={onClick}>Documentaries</button>
    <button id='TV Shows' onClick={onClick}>TV Shows</button>
    <button id='Oscar-winning Movies' onClick={onClick}>Oscar-winning Movies</button>
    <button id='Dramas' onClick={onClick}>Dramas</button>
    <button id='Anime' onClick={onClick}>Anime</button>
    <button id='Independent Movies' onClick={onClick}>Independent Movies</button>
    <button id='Children & Family Movies' onClick={onClick}>Children & Family Movies</button>
    <button id='Horror Movies' onClick={onClick}>Horror Movies</button>
    <button id='Action & Adventure' onClick={onClick}>Action & Adventure</button>
    <button id='Comedies' onClick={onClick}>Comedies</button>
    <button id='Pornographic' onClick={onClick}>Pornographic</button>
    <button id='X (clear filter)' onClick={onClick}>X (clear filter)</button>
  </label>
)

export default GenreButton
