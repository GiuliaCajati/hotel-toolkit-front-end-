import setLoginState from './setLoginState'
import setNewUser from './setNewUser'

import teamMember from './selectedTeamMember'
import teamMembers from './teamMembers'
import departments from './departments'

import dates from './dates'
import events from './events'
import event from './selectedEvent'
import tasks from './tasks'
import dateEvent from './dateEvent'

import {combineReducers} from 'redux'
 


const rootReducers =  combineReducers({
    currentUser : setLoginState,
    setNewUser : setNewUser,
    events : events,
    departments : departments,
    teamMembers : teamMembers,
    teamMember : teamMember,
    event : event,
    dates : dates,
    tasks : tasks,
    dateEvent : dateEvent
})

export default rootReducers;