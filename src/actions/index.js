export const  FETCHED_EVENTS = "FETCHED_EVENTS"
export const  FETCHED_DEPARTMENTS = "FETCHED_DEPARTMENTS"

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




