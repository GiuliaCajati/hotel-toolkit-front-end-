import {  ADD_TASK, DELETE_TASK , EDIT_TASK} from '../actions/index'

const tasksReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TASK:
            return [...state, ...action.payload]
        case DELETE_TASK:
            debugger
            return [ state.filter(item => item !== action.payload)]// 
        case EDIT_TASK:
            return [ state.filter(item => item !== action.payload), ...action.payload] 
        default: 
            return state;
    }
}

export default tasksReducer;