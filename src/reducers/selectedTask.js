import { DISPLAY_TASK, CLEAR_DISPLAY_TASK} from '../actions/index'

const taskReducer = (state = [], action) => {
    switch(action.type){
        case DISPLAY_TASK:
            return [action.payload]
        case CLEAR_DISPLAY_TASK:
            return []
        default: 
            return state;
    }
}

export default taskReducer;