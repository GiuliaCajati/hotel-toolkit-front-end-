import loggedReducer from './isLogged'
import events from './events'
import {combineReducers} from 'redux'

const allReducers =  combineReducers({
    isLogged : loggedReducer,
    events : events
})

export default allReducers;