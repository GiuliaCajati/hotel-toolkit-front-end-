
import { FETCHED_EVENTS, FILTER_EVENTS,ADD_EVENT } from '../actions/index'

const eventsReducer = (state = [], action) => {
    
    switch(action.type){
        case FETCHED_EVENTS:
            return [...state, ...action.payload]
        case ADD_EVENT:
            return [...state, ...action.payload]
        case FILTER_EVENTS:
            return [...state, ...action.payload]
        default: 
            return state;
    }
}
//state.filter(task => task.id !== action.payload) 
export default eventsReducer;