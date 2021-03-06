import { AUTH_LOGOUT, AUTH_SUCCESS } from "../actions/actionType"

const initialState = {
    token:null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
               ...state, token: action.token 
            }
        case AUTH_LOGOUT:
            return {
               ...state, token: action.token
            }
        default:
            return state
    }
}