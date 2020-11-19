
const events = (state = [], action) => {
    switch(action.type){
        case 'FETCHED_EVENTS':
            return action.payload;
        default: 
            return state;
    }
}

export default events;