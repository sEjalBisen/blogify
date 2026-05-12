import React from 'react'
import ReactDOM from 'react-dom/client'

import {Provider} from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import blogReducer from "./reducers/blogreducers";
import blogCategoryReducer from "./reducers/blogCategoryreducer";
import App from './App'

const rootReducer = combineReducers({
  blog: blogReducer,
  category: blogCategoryReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)

