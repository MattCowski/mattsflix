
const initialState = {
  results: [],
  message: "Search by Title, Director or Actor!",
  field: 'title',
  value: ''
}

function reducers(state = initialState, action) {
  switch (action.type) {
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
      results: []
    }
  default:
    return state
  }
}


export default reducers
