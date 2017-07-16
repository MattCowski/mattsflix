import React from 'react';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'

let store = createStore(
  reducers,
  applyMiddleware(
    thunkMiddleware
  )
)

store.subscribe(() =>
  console.log(store.getState())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
