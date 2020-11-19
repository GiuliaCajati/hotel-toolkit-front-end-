import loggedReducer from './isLogged'
import events from './events'
import {combineReducers} from 'redux'
 


const rootReducers =  combineReducers({
    isLogged : loggedReducer,
    events : events
})

export default rootReducers;