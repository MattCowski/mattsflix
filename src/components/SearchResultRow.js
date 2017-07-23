import React from 'react';

const SearchResultRow = ({onResultClick, movie})=>

      <div onClick={onResultClick} className="Item" style={{backgroundImage: 'url(' + movie.poster + ')'}} >
				<div className="overlay" style={movie.posterLoaded? null:{opacity:1}}>
					<div className="title" style={movie.posterLoaded? null:{opacity:1}}>{movie.show_title}</div>
					<div className="rating">{movie.rating}</div>
					<div className="plot">{movie.summary}</div>
				</div>
			</div>

export default SearchResultRow
