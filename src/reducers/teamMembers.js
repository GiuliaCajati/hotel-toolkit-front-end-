import { FETCHED_TEAM_MEMBERS }  from '../actions/index'

const teamMemberReducer = (state = [], action) => {
    switch(action.type){
        case FETCHED_TEAM_MEMBERS:
            return [...state, ...action.payload]
        default: 
            return state;
    }
}

export default teamMemberReducer;