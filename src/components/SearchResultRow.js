import React from 'react';

const SearchResultRow = ({onResultClick, title, rating, category, cast, director, summary, poster})=>
    <tr onClick={onResultClick}>
      <td>{title}</td>
      <td>{rating}</td>
      <td>{category}</td>
      <td><img width="100" src={poster}/></td>
      {/* <td>{summary}</td> */}
      <td>{director}</td>
    </tr>


export default SearchResultRow
