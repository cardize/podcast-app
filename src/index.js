import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reducer } from './redux/reducer/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={createStore(reducer)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
)
