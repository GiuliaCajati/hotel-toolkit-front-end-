import { history } from '../index.js';
//fetch 
export const  FETCHED_DATES = "FETCHED_DATES"
export const  FETCHED_EVENTS = "FETCHED_EVENTS"
export const  FILTER_EVENTS = "FILTER_EVENTS"
export const  FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS"
export const FETCHED_TEAM_MEMBERS = "FETCHED_TEAM_MEMBERS"
//login/logout
export const  SET_LOGIN_STATE = "SET_LOGIN_STATE"
export const SET_LOGOUT_STATE = "SET_LOGOUT_STATE"
export const  SET_NEW_USER = "SET_NEW_USER"
export const  DISPLAY_TEAM_MEMBER = "DISPLAY_TEAM_MEMBER"

export const  DISPLAY_EVENT = "DISPLAY_EVENT"
export const  SEARCH_EVENTS = "SEARCH_EVENTS"
export const  ADD_EVENT = "ADD_EVENT"

export const  ADD_DATE_EVENT = "ADD_DATE_EVENT"

export const  ADD_TASK = "ADD_TASK"
// //need to make
export const  DELETE_TASK = "DELETE_TASK"
export const  EDIT_TASK = "EDIT_TASK"

const URL = "http://localhost:3000/"

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

export const filterEvents = (filteredEvents) => {
    return{
        type: FILTER_EVENTS,
        payload: filteredEvents
    }
  }

  //fix this 
export const searchEvents = (filteredEvents) => {
    return{
        type: SEARCH_EVENTS,
        payload: filteredEvents
    }
  }

  export const addEvent = (newEvent) => {
    return (dispatch) => {
        debugger
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

export const addDateEvent = (newDateEvent) => {
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



export const addTask = (newTask) => {
    return (dispatch) => {
        debugger
        fetch(URL + "/tasks", {
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
//DELETE_TASK
export const deleteTask = (selectedTask) => {
    return (dispatch) => {
        fetch(URL + `${selectedTask.id}`, {
            method: "DELETE"
        })
        .then(res => res.json())   
        .then(selectedTask => {
            dispatch({
                    type: "DELETE_TASK", 
                    payload: selectedTask
            })
            history.push('/home')
        })
          //  history.push('/events') 
    }
}
//EDIT_TASK
export const editTask = (selectedTask) => {
    return (dispatch) => {
        debugger
        fetch(URL + `${selectedTask}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                    'Accept': 'application/json'
            },
        body: JSON.stringify(selectedTask)
        })
        .then(res => res.json())   
        .then(selectedTask => {
            dispatch({
                    type: "EDIT_TASK", 
                    payload: [selectedTask] 
            })
          //  history.push('/events')
        })
    }
}
  

export const displayEvent = (selectedEvent) => {
  return{
      type: DISPLAY_EVENT,
      payload: selectedEvent
  }
}

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

export const displayTeamMember = (selecteTeamMember) => {
    return{
        type: DISPLAY_TEAM_MEMBER,
        payload: selecteTeamMember
    }
}

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

export const setLogOutState = () => {
    return{
        type: SET_LOGOUT_STATE,
    }
}

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









 


