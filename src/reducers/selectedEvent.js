import { DISPLAY_EVENT, CLEAR_DISPLAY_EVENT } from '../actions/index'

const eventReducer = (state = [], action) => {
    switch(action.type){
        case DISPLAY_EVENT:
            return [action.payload]
        case CLEAR_DISPLAY_EVENT:
            return []
        default: 
            return state;
    }
}

export default eventReducer;