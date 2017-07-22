import React from 'react';
import { connect } from 'react-redux'
import SearchResultRow from './SearchResultRow'
import { setSelected } from '../actions'
import './Results.css';
import GenreButton from './GenreButton'

const mapStateToProps = (state, ownProps)=>{
  const filteredResults = !state.filter? state.results : state.results.filter(movie=> movie.category==state.filter)
  const sortAsc = (results)=> results.sort((a,b)=> a.rating-b.rating)
  const sortDes = (results)=> results.sort((a,b)=> b.rating-a.rating)
  const categoryCount = filteredResults.reduce((a,c,i)=>{
      a[c.category]=a[c.category]? a[c.category]+1 : 1
      return a
    },{})

  return {
    ...state,
    results: state.order=='rating v' ? sortAsc(filteredResults)
          : state.order=='rating ^' ? sortDes(filteredResults)
          : filteredResults,
    categories: categoryCount,
    size: 5
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onResultClick: (movie)=> dispatch(setSelected(movie))
  }
}

const ResultsTable = connect(mapStateToProps, mapDispatchToProps)(
  ({results, message, onResultClick, selected, categories, size})=>
    message ? <code>{message}</code> :
    <div>{
      Object.keys(categories)
      .map((cat)=> categories[cat]>=size &&
      <div className="TitleList" data-loaded={results.length>0}>
          <div className="Title">
            <h1>{cat} </h1><span>({categories[cat]})</span>
            <div className="titles-wrapper">
              {
                results
                .filter(movie=> movie.category==cat)
                .slice(0, size)
                .map((data, index)=>
                <SearchResultRow
                  key={index}
                  title={data.show_title}
                  poster={data.poster}
                  director={data.director}
                  rating={data.rating}
                  summary={data.summary}
                  category={data.category}
                  onResultClick={()=>onResultClick(data)}
                />
              )
            }
            </div>

          </div>

      </div>
      )
    }
    <div className="TitleList" data-loaded={results.length>0}>

					<h1>{'Other Categories'}</h1>
          <GenreButton/>
					<div className="titles-wrapper">
            {
              results.map((data, index)=> categories[data.category]<size &&
              <SearchResultRow
                key={index}
                title={data.show_title}
                poster={data.poster}
                director={data.director}
                rating={data.rating}
                summary={data.summary}
                category={data.category}
                onResultClick={()=>onResultClick(data)}
              />
            )
          }
					</div>
				</div>



    </div>
)


export default ResultsTable
