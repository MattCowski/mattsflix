import React from 'react';

const SearchResultRow = ({onResultClick, title, rating, category, cast, director, summary, poster})=>
    <tr onClick={onResultClick}>
      <td style={{cursor:'pointer',textDecoration: 'underline'}}>{title}</td>
      <td>{rating}</td>
      <td>{category}</td>
      <td><img width="100" alt={title} src={poster}/></td>
      <td>{director}</td>
    </tr>


export default SearchResultRow
