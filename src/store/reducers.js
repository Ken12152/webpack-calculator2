import {  } from 'react-redux'
import { combineReducers } from 'redux'

import calculatorReducer from './reducers/calculatorReducer'

const reducers = combineReducers({
    calculator: calculatorReducer
})

export default reducers