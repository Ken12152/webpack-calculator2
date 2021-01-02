import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import './assets/css/style.css'
import reducers from './store/reducers'
import App from './main/App'

import multi from './store/multiMiddleware'

const store = createStore(reducers, applyMiddleware(multi))

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)