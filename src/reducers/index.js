import loggedReducer from './isLogged'
import events from './events'
import departments from './departments'
import {combineReducers} from 'redux'
 


const rootReducers =  combineReducers({
    isLogged : loggedReducer,
    events : events,
    departments : departments
})

export default rootReducers;