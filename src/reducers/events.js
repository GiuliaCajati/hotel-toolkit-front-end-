
import { FETCHED_EVENTS, FILTER_EVENTS, SEARCH_EVENTS, ADD_EVENT } from '../actions/index'

const eventsReducer = (state = [], action) => {
    switch(action.type){
        case FETCHED_EVENTS:
            return [...state, ...action.payload]
        case ADD_EVENT:
            return [...action.payload]
        case FILTER_EVENTS:
            return [...state, ...action.payload]
        case SEARCH_EVENTS:
            return [...action.payload]
        default: 
            return state;
    }
}

export default eventsReducer;