import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './assets/css/style.css'
import reducers from './store/reducers'
import App from './main/App'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
)