
import { FETCHED_EVENTS } from '../actions/index'

const eventsReducer = (state = [], action) => {
    debugger
    switch(action.type){
        case FETCHED_EVENTS:
            return [...state, ...action.payload]
        default: 
            return state;
    }
}

export default eventsReducer;