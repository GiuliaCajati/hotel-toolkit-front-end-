import setLoginState from './setLoginState'
import events from './events'
import departments from './departments'
import setNewUser from './setNewUser'
import teamMembers from './teamMembers'
import {combineReducers} from 'redux'
 


const rootReducers =  combineReducers({
    setLoginState : setLoginState,
    setNewUser : setNewUser,
    events : events,
    departments : departments,
    teamMembers : teamMembers
})

export default rootReducers;