import fetch from 'isomorphic-fetch'

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
function requestMovies(query, field) {
  return {
    type: REQUEST_MOVIES,
    query,
    field
  }
}

export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
function receiveMovies(query, json) {
  return {
    type: RECEIVE_MOVIES,
    query,
    results: json,//.map(child => child),
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

export function fetchMovies(query, field) {
  return function (dispatch) {
    if (query.length<3) return dispatch(receiveError('Please enter at least 5 chars'))

    dispatch(requestMovies(query, field))

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
