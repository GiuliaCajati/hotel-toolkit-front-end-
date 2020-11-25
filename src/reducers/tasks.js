import {  ADD_TASK } from '../actions/index'

const tasksReducer = (state = [], action) => {
    switch(action.type){
        case ADD_TASK:
            return [...state, ...action.payload]
        default: 
            return state;
    }
}

export default tasksReducer;