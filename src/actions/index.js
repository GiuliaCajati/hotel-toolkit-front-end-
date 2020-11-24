import { history } from '../index.js';

export const  FETCHED_DATES = "FETCHED_DATES"
export const  FETCHED_EVENTS = "FETCHED_EVENTS"
export const  FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS"
export const FETCHED_TEAM_MEMBERS = "FETCHED_TEAM_MEMBERS"
export const  SET_LOGIN_STATE = "SET_LOGIN_STATE"
export const  SET_NEW_USER = "SET_NEW_USER"
export const  DISPLAY_EVENT = "DISPLAY_EVENT"
export const SET_LOGOUT_STATE = "SET_LOGOUT_STATE"
export const  DISPLAY_TEAM_MEMBER = "DISPLAY_TEAM_MEMBER"

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







 


