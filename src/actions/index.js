import TeamMemberHomePage from "../components/TeamMemberHomePage"

export const  FETCHED_EVENTS = "FETCHED_EVENTS"
export const  FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS"
export const FETCHED_TEAM_MEMBERS = "FETCHED_TEAM_MEMBERS"
export const  SET_LOGIN_STATE = "SET_LOGIN_STATE"
export const  SET_NEW_USER = "SET_NEW_USER"

const URL = "http://localhost:3000/"

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
                    payload: [loginData] 
            })
        })
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
        })
    }
}




 


