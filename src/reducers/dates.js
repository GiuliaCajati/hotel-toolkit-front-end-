
import { FETCHED_DATES } from '../actions/index'

const datesReducer = (state = [], action) => {
 
    switch(action.type){
        case FETCHED_DATES:
            return [...state, ...action.payload]
        default: 
            return state;
    }
}

export default datesReducer;