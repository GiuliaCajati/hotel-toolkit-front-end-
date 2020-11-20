import { FETCHED_DEPARTMENTS } from '../actions/index'

const departmentsReducer = (state = [], action) => {
    switch(action.type){
        case FETCHED_DEPARTMENTS:
            return [...state, ...action.payload]
        default: 
            return state;
    }
}

export default departmentsReducer;