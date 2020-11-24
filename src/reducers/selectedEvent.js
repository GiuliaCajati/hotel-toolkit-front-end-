import { DISPLAY_EVENT } from '../actions/index'

const eventReducer = (state = [], action) => {
    switch(action.type){
        case DISPLAY_EVENT:
            return [action.payload]
        default: 
            return state;
    }
}

export default eventReducer;