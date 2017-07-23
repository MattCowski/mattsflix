
const initialState = {
  results: [],
  message: "Search by Title, Director or Actor!",
  field: 'actor',
  value: 'bruce willis',
  selected: null,
  filter: null
}

function reducers(state = initialState, action) {
  switch (action.type) {
  case 'SORT_ORDER':
    console.log('ordr by :', action.order)
    // action.order is for now 'Top Rated'
    return {
      ...state,
      order: state.order==action.order+" v" ? action.order+" ^" : action.order+" v"
      // filter: action.filter=='X (clear filter)'?null: action.filter,
    }
  case 'SET_FILTER':
    console.log('setting filter', action.filter)
    return {
      ...state,
      filter: action.filter=='X (clear filter)'?null: action.filter,
    }
  case 'SET_SELECTED':
    return {
      ...state,
      selected: action.selected
    }
  case 'SET_FIELD':
    return {
      ...state,
      field: action.field,
    }
  case 'RECEIVE_ERROR':
    return {
      ...state,
      message: action.message,
      results:[]
    }
  case 'RECEIVE_MOVIES':
    return {
      ...state,
      results: action.results.map((movie)=>{
        var obj = new Image();
        obj.src = movie.poster
        // check if poster url can load
        movie.posterLoaded = obj.complete
        return movie
      }),
      message: null
    }

  case 'REQUEST_MOVIES':
    return {
      ...state,
      value: action.query,
      message: 'searching...',
      results: [],
      selected: null
    }
  default:
    return state
  }
}


export default reducers
