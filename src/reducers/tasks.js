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
            //not fully working 
            return [state.filter(item => item.id !== action.payload[0].id), ...action.payload].flat() 
        default: 
            return state;
    }
}

export default tasksReducer;