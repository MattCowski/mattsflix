import React from 'react';
import { connect } from 'react-redux'
import { setSelected } from '../actions'
import './MovieDetails.css';

const mapStateToProps = (state, ownProps)=>{
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetSelected: ()=> dispatch(setSelected(null))
  }
}

const MovieDetails = ({selected, resetSelected})=>
  selected &&
  <div>
    <span onClick={resetSelected}>back to list / close (X)</span>

    <div className="moviecard">
      <div className="movie-poster play-trailer"
        style={{background: 'url('+selected.poster+')'}}
        onClick={()=>window.open("https://www.netflix.com/WiPlayer?movieid="+selected.show_id)}
        ></div>
      <div id="movie-content">
        <div className="movie-ratings">
          <span className="star">★</span>
          <span className="score">{selected.rating}</span>
          <span className="score-out-of"> (NETFLIX)</span>
        </div>
        <div className="movie-title">
          <a href={"https://www.netflix.com/WiPlayer?movieid="+selected.show_id} target="_blank">{selected.show_title}</a>
          <span className="movie-year">
            {selected.release_year}
          </span>
        </div>
        <div className="movie-details">
          <span className="movie-rating">R</span>
          <span className="movie-duration">{selected.runtime}</span>
          <span className="movie-genre">{selected.category}</span></div>
        <div className="movie-castcrew">
          <span className="title">Director</span>
          <span className="name">{selected.director}</span></div>
        <div className="movie-castcrew">
          <span className="title">Writer</span>
          <span className="name">{selected.director}</span></div>
        <div className="movie-castcrew">
          <span className="title">Cast</span>
          <span className="name">{selected.show_cast}</span></div>
        <div className="movie-synopsis">{selected.summary}</div>
        <a className="movie-trailer-btn play-trailer" type="button"
          href={"https://www.youtube.com/results?search_query="+selected.show_title}>
          play trailer
        </a>
      </div>
    </div>

  </div>



export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails)
