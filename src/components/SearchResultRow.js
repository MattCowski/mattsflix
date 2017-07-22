import React from 'react';

const SearchResultRow = ({onResultClick, title, rating, category, cast, director, summary, poster})=>

      <div onClick={onResultClick}className="Item" style={{backgroundImage: 'url(' + poster + ')'}} >
				<div className="overlay">
					<div className="title">{title}</div>
					<div className="rating">{rating} / 10</div>
					<div className="plot">{summary}</div>
				</div>
			</div>

export default SearchResultRow
