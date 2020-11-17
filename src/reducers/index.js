import { combineReducers } from 'redux';

const payloads = (payload = [], action) => {

    if(action.type === 'PAYLOADS_ADDED') {
        
        return action.payload;
    }

    return payload;
}

export default combineReducers({
    payloads: payloads
});

