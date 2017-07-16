import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import thunkMiddleware from 'redux-thunk'
import { fetchMovies } from './actions'
// import reducers from './reducers'

const initialState = {
  results: [],
  message: "Search by Title, Director or Actor!"
}

function reducers(state = initialState, action) {
  switch (action.type) {
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
let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
)


store.subscribe(() =>
  console.log(store.getState())
)

// store
//   .dispatch(fetchMovies('Bruce Willis'))
//   .then(() => console.log(store.getState()))


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
