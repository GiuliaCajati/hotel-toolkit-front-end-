import {  ADD_DATE_EVENT } from '../actions/index'

const addDateEvent = (state = [], action) => {
    switch(action.type){
        case ADD_DATE_EVENT:
            return [...state, ...action.payload]
        default: 
            return state;
    }
}

export default addDateEvent;