import setLoginState from './setLoginState'
import events from './events'
import departments from './departments'
import {combineReducers} from 'redux'
 


const rootReducers =  combineReducers({
    setLoginState : setLoginState,
    events : events,
    departments : departments
})

export default rootReducers;