import { history } from '../index.js';
//fetch 
export const  FETCHED_DATES = "FETCHED_DATES"
export const  FETCHED_EVENTS = "FETCHED_EVENTS"
export const  FILTER_EVENTS = "FILTER_EVENTS"
export const  FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS"
export const FETCHED_TEAM_MEMBERS = "FETCHED_TEAM_MEMBERS"
export const FETCHED_TASKS = "FETCHED_TASKS"

//login/logout
export const  SET_LOGIN_STATE = "SET_LOGIN_STATE"
export const SET_LOGOUT_STATE = "SET_LOGOUT_STATE"
export const  SET_NEW_USER = "SET_NEW_USER"
export const  DISPLAY_TEAM_MEMBER = "DISPLAY_TEAM_MEMBER"

export const  DISPLAY_EVENT = "DISPLAY_EVENT"
export const  CLEAR_DISPLAY_EVENT = "CLEAR_DISPLAY_EVENT"
export const  SEARCH_EVENTS = "SEARCH_EVENTS"
export const  ADD_EVENT = "ADD_EVENT"

export const  ADD_DATE_EVENT = "ADD_DATE_EVENT"

//task
export const  UPDATE_TASK = "UPDATE_TASK"
export const  ADD_TASK = "ADD_TASK"
export const  DISPLAY_TASK = "DISPLAY_TASK"
export const  CLEAR_DISPLAY_TASK = "CLEAR_DISPLAY_TASK"
export const  DELETE_TASK = "DELETE_TASK"
export const  ADD_TASK_NOTES = "ADD_TASK_NOTES"

//need to make 
export const  EDIT_TASK = "EDIT_TASK"

//const URL = "http://localhost:3000/"
const URL = "https://hotel-toolkit.herokuapp.com/"


export const addTask = (newTask) => {debugger
    
    return (dispatch) => {
        fetch(URL + "tasks", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
            body: JSON.stringify(newTask)
        })
        .then(res => res.json())   
        .then(newTask => {
            dispatch({
                    type: "ADD_TASK", 
                    payload: [newTask]
            })
            history.push('/home')
        })
    }
}


export const addTaskNotes = (taskId, Addednotes) => {debugger
    
    return (dispatch) => { 
        fetch(URL +  `/add_notes/${taskId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
            body: JSON.stringify({
               notes: Addednotes
            })
        })
        .then(res => res.json())   
        
        .then(updatedTask => { 
            dispatch({
                //updatesTask.status = true
                    type: "ADD_TASK_NOTES", 
                    payload: [updatedTask]
            })
            history.push('/home')
        })
    }
}


export const updateTask = (taskId, checked) => {
    
    return (dispatch) => { 
        fetch(URL +  `tasks/${taskId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
            body: JSON.stringify({
               status: checked
            })
        })
        .then(res => res.json())   
        
        .then(updatedTask => { 
            dispatch({
                //updatesTask.status = true
                    type: "UPDATE_TASK", 
                    payload: [updatedTask]
            })
            history.push('/home')
        })
    }
}
 
export const displayTask = (selectedTask) => {
    return{
        type: DISPLAY_TASK,
        payload: selectedTask
    }
}



export const clearDisplayTask = () => {
    return{
        type: CLEAR_DISPLAY_TASK,
    }
}
export const clearDisplayEvent = () => {
    return{
        type: CLEAR_DISPLAY_EVENT,
    }
}

//delete tasks: need to change event state, events state, user state, dates? 
export const deleteTask = (selectedTaskID) => {
    return (dispatch) => {
        fetch(URL +  `tasks/${selectedTaskID}`, {
            method: "DELETE"
        })
        .then(res => console.log(res)) 
        .then(task => {
            debugger
            dispatch({
                    type: "DELETE_TASK",
                    payload: selectedTaskID
            })
            history.push('/home')
        })
    }
}

//not yet working 
export const searchEvents = (filteredEvents) => {
    return{
        type: SEARCH_EVENTS,
        payload: filteredEvents
    }
}


export const addDateEvent = (newDateEvent) => {
    debugger
    return (dispatch) => {
        
        fetch(URL + "/date_events", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
            body: JSON.stringify(newDateEvent)
        })
        .then(res => res.json())   
        .then(newDateEvent => {
            dispatch({
                    type: "ADD_DATE_EVENT", 
                    payload: [newDateEvent]
              
            })
            history.push('/events')
        })
    }
}

//fetching dates 
export const fetchingDates = () => {
    return (dispatch) => {
        fetch(URL + "date_infos")
        .then(res => res.json())
        .then(dates => {
            dispatch({
                    type: "FETCHED_DATES", 
                    payload: dates 
            })
        })
    }
}

// fetchin events 
export const fetchingEvents = () => {
    return (dispatch) => {
        fetch(URL + "events")
        .then(res => res.json())
        .then(events => {
            dispatch({
                    type: "FETCHED_EVENTS", 
                    payload: events
            })
        })
    }
}

//radio filter 
export const filterEvents = (filteredEvents) => {
    return{
        type: FILTER_EVENTS,
        payload: filteredEvents
    }
}

//add event 
export const addEvent = (newEvent) => {
    return (dispatch) => {
        fetch(URL + "/events", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
        .then(res => res.json())   
        .then(newEvent => {
            dispatch({
                    type: "ADD_EVENT", 
                    payload: [newEvent] 
            })
            history.push(`/events/${newEvent.id}`)
        })
    }
}

//fetch Tasks
export const fetchingTasks = () => {
    return (dispatch) => {
        fetch(URL + "tasks") 
        .then(res => res.json())   
        .then(tasks => {
            dispatch({
                    type: "FETCHED_TASKS", 
                    payload: tasks
            }) 
           // history.push('/events')
        })
          //  history.push('/events') 
    }
}


//event show page 
export const displayEvent = (selectedEvent) => {
  return{
      type: DISPLAY_EVENT,
      payload: selectedEvent
  }
}

//departments for new team member form 
export const fetchingDepartments = () => {
    return (dispatch) => {
        fetch(URL + "departments")
        .then(res => res.json())
        .then(departments => {
            dispatch({
                    type: "FETCHED_DEPARTMENTS", 
                    payload: departments 
            })
        })
    }
}

//team member show page 
export const displayTeamMember = (selecteTeamMember) => {
    return{
        type: DISPLAY_TEAM_MEMBER,
        payload: selecteTeamMember
    }
}

//fetching team members 
export const fetchingTeamMembers = () => {
    return (dispatch) => {
        fetch(URL + "team_members")
        .then(res => res.json())
        .then(team_members => {
            dispatch({
                    type: "FETCHED_TEAM_MEMBERS", 
                    payload: team_members 
            })
        })
    }
}

//login
export const setLoginState = (loginData) => {
    return (dispatch) => {
        fetch(URL + "login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
            body: JSON.stringify(loginData)
        })
        .then(res => res.json())   
        .then(loginData => {
    
            dispatch({
                    type: "SET_LOGIN_STATE", 
                    payload: [loginData],
            })
            history.push('/home')
        }) 
    }
}

//logout 
export const setLogOutState = () => {
    return{
        type: SET_LOGOUT_STATE,
    }
}

//add team member 
export const setNewUser = (newUserData) => {
    return (dispatch) => {
        fetch(URL + "team_members", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
            body: JSON.stringify(newUserData)
        })
        .then(res => res.json())   
        .then(newUserData => {
            dispatch({
                    type: "SET_NEW_USER", 
                    payload: [newUserData] 
            })
//user show page
            //history.push('/home')
        })
    }
}









 


