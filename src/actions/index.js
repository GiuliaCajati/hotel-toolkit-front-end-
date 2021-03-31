import { history } from '../index.js';
export const  FETCHED_DATES = "FETCHED_DATES"//AddDateDetails, AddTaskDetails, NewTaskForm, WelcomePage
//goal is to make all fetches from dates 
//where are modifications made? 
//login/logout
export const  SET_LOGIN_STATE = "SET_LOGIN_STATE"
export const SET_LOGOUT_STATE = "SET_LOGOUT_STATE"
export const  DISPLAY_TEAM_MEMBER = "DISPLAY_TEAM_MEMBER"//TeamMemberShowPage, TeamMemberHomePage, 
export const  ADD_TEAM_MEMBER = "ADD_TEAM_MEMBER"

export const  FETCHED_EVENTS = "FETCHED_EVENTS"//Calendar, EventFilter
export const  FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS"//AddTaskDetails 
export const FETCHED_TEAM_MEMBERS = "FETCHED_TEAM_MEMBERS"//NewTaskForm
export const FETCHED_TASKS = "FETCHED_TASKS"//Calendar, EventShowPage, WelcomePage, ThisWeek, TeamMemberShowPage, TeamMemberHomePage, TasksShowPage 

export const  DISPLAY_EVENT = "DISPLAY_EVENT"//AddDateDetails, Calendar
export const  CLEAR_DISPLAY_EVENT = "CLEAR_DISPLAY_EVENT"//Calendar
export const  ADD_EVENT = "ADD_EVENT"//NewEventForm
export const  FILTER_EVENTS = "FILTER_EVENTS"//EventIndexPage
export const  ADD_DATE_EVENT = "ADD_DATE_EVENT"//AddDateDetails

// Task
export const  UPDATE_TASK = "UPDATE_TASK"//TeamMemberHomePage
export const  ADD_TASK = "ADD_TASK"//AddDateDetails, NewTaskForm
export const  DELETE_TASK = "DELETE_TASK"//TasksShowPage
export const  ADD_TASK_NOTES = "ADD_TASK_NOTES"//AddTaskNotes
export const  DISPLAY_TASK = "DISPLAY_TASK"//Calendar, EventShowPage, TasksShowPage
export const  CLEAR_DISPLAY_TASK = "CLEAR_DISPLAY_TASK"//Calendar

const URL = "http://localhost:3000/"
//const URL = "https://hotel-toolkit.herokuapp.com/"

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

//add team member 
export const addTeamMember= (newUserData) => {
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
                    type: "ADD_TEAM_MEMBER", 
                    payload: [newUserData] 
            })
//user show page
            //history.push('/home')
        })
    }
}









 


