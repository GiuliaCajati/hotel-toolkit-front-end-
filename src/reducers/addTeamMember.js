import { ADD_TEAM_MEMBER } from '../actions/index'
// this is what our action should look like which dispatches the "payload" to reducer
const setNewUser = (state = [], action) => {
    
    switch(action.type){
        case ADD_TEAM_MEMBER:
            return [...state, ...action.payload]
        default: 
            return state;
    }  
  };

export default setNewUser;