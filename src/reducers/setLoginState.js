import { SET_LOGIN_STATE, SET_LOGOUT_STATE } from '../actions/index'
// this is what our action should look like which dispatches the "payload" to reducer
const setLoginState = (state = [], action) => {
    
    switch(action.type){
        case SET_LOGIN_STATE:
            return [...state, ...action.payload]
        // case ADD_USER_TASKS:
        //     debugger
        //     if(action.payload.team_member_id == state[0].id){
        //         debugger 
        //         return state[0].tasks.push(action.payload[0])
        //     } else if (action.payload[0].department.id == state[0].department.id){
        //         debugger
        //         return state[0].department.tasks.push(action.payload[0])
        //     } 
        // case DELETE_USER_TASKS:
        //     //working on it 
        //     return [...state, ...action.payload]
        case SET_LOGOUT_STATE:
            return []
        default: 
            return state;
    }  
  };

export default setLoginState;



