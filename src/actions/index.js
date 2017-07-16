import fetch from 'isomorphic-fetch'

export const REQUEST_MOVIES = 'REQUEST_MOVIES'
function requestMovies(query) {
  return {
    type: REQUEST_MOVIES,
    query
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

export function fetchMovies(query) {
  return function (dispatch) {
    if (query.length<3) return dispatch({type:'RECEIVE_ERROR',message:'Please enter at least 5 chars'})
    dispatch(requestMovies(query))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://netflixroulette.net/api/api.php?actor=${query}`)
      .then(
        response => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing an loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        error => console.log('An error occured.', error)
      )
      .then(json =>
        (json.errorcode) ? dispatch({type:'RECEIVE_ERROR',message:json.message}) : dispatch(receiveMovies(query, json))
      )
  }
}
