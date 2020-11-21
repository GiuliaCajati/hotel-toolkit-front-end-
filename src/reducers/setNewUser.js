import { SET_NEW_USER } from '../actions/index'
// this is what our action should look like which dispatches the "payload" to reducer
const setNewUser = (state = [], action) => {
    
    switch(action.type){
        case SET_NEW_USER:
            return [...state, ...action.payload]
        default: 
            return state;
    }  
  };

export default setNewUser;