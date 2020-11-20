import TeamMemberHomePage from "../components/TeamMemberHomePage"

export const  FETCHED_EVENTS = "FETCHED_EVENTS"
export const  FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS"
export const  SET_LOGIN_STATE = "SET_LOGIN_STATE"


const eventsURL = "http://localhost:3000/events"
export const fetchingEvents = () => {
    return (dispatch) => {
        fetch(eventsURL)
        .then(res => res.json())
        .then(events => {
            dispatch({
                    type: "FETCHED_EVENTS", 
                    payload: events 
            })
        })
    }
}

const departmentsURL = "http://localhost:3000/departments"
export const fetchingDepartments = () => {
    return (dispatch) => {
        fetch(departmentsURL)
        .then(res => res.json())
        .then(departments => {
            dispatch({
                    type: "FETCHED_DEPARTMENTS", 
                    payload: departments 
            })
        })
    }
}

const teamMemberURL = "http://localhost:3000/login"
export const setLoginState = (loginData) => {
    return (dispatch) => {
        fetch(teamMemberURL, {
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






 


