import fetch from 'isomorphic-fetch'

export const SORT_ORDER = 'SORT_ORDER'
export function sortBy(order) {
  return {
    type: SORT_ORDER,
    order
  }
}

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
function requestMovies(query) {
  return {
    type: REQUEST_MOVIES,
    query
  }
}

export const SET_FILTER = 'SET_FILTER'
export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter: filter//.toLowerCase()
  }
}

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
function receiveMovies(query, json) {
  return {
    type: RECEIVE_MOVIES,
    query,
    results: Array.isArray(json) ? json : [json],
    receivedAt: Date.now()
  }
}

export const RECEIVE_ERROR = 'RECEIVE_ERROR'
function receiveError(message) {
  return {
    type: RECEIVE_ERROR,
    message
  }
}

export const SET_FIELD = 'SET_FIELD'
export function setField(field) {
  return {
    type: SET_FIELD,
    field
  }
}

export const SET_SELECTED = 'SET_SELECTED'
export function setSelected(selected) {
  return {
    type: SET_SELECTED,
    selected
  }
}

export function fetchMovies(query) {
  return function (dispatch, getState) {
    const field = getState().field
    query = query ? query : getState().value

    if (query.length<3) return dispatch(receiveError('Please enter at least 5 chars'))

    dispatch(requestMovies(query))

    return fetch(`https://netflixroulette.net/api/api.php?${field}=${query}`)
      .then(
        response => response.json(),
        error => console.log('An error occured.', error)
      )
      .then(json =>
        (json.errorcode) ? dispatch(receiveError(json.message)) : dispatch(receiveMovies(query, json))
      )
  }
}
