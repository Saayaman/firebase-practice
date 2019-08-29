import { SIGN_UP } from '../actions/userLogin';


const initialState = {
    authUser: null,
}

export default function userLogin(state = initialState, action) {
    switch(action.type) {
        case SIGN_UP:
            return userSignUp(state, action);
        default:
            return state;  
    }
}

function userSignUp(state, action) {
    console.log('action', action);
    return {
        authUser: 'data'
    }
}