import { DISPLAY_TEAM_MEMBER } from '../actions/index'

const teamMemberReducer = (state = [], action) => {
    switch(action.type){
        case DISPLAY_TEAM_MEMBER:
            return [action.payload]
        default: 
            return state;
    }
}

export default teamMemberReducer;