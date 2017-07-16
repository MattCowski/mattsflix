
const initialState = {
  results: [],
  message: "Search by Title, Director or Actor!",
  field: 'actor',
  value: '',
  selected: null
}

function reducers(state = initialState, action) {
  switch (action.type) {
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
