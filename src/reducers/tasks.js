import {  ADD_TASK, DELETE_TASK , FETCHED_TASKS, UPDATE_TASK} from '../actions/index'

const tasksReducer = (state = [], action) => {
    switch(action.type){
        case FETCHED_TASKS:
            return [...state, ...action.payload]
        case ADD_TASK:
            return [...state, ...action.payload]
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload) 
        case UPDATE_TASK:
            return [ state.filter(item => item !== action.payload), ...action.payload] 
        default: 
            return state;
    }
}

export default tasksReducer;