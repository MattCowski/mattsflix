
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
  case 'SET_FILTER':
    console.log('setting filter', action.filter)
    return {
      ...state,
      // filter: action.filter,
      filter: action.filter=='X (clear filter)'?null: action.filter,
      //results: state.results.filter(movie=> movie.category==action.filter)
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
      results: action.results,
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
