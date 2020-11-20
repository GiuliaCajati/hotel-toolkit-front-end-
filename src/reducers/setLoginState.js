import { SET_LOGIN_STATE } from '../actions/index'
// this is what our action should look like which dispatches the "payload" to reducer
const setLoginState = (state = [], action) => {
    switch(action.type){
        case SET_LOGIN_STATE:
            return [...state, ...action.payload]
        default: 
            return state;
    }  
  };

export default setLoginState;


