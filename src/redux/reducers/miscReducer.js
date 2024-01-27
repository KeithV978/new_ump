import {
    IS_AUTHENTICATING,
    LOADING,
    SET_AUTH_STATUS,
    SET_REQUEST_STATUS,
    SET_ALERT,
    CLEAR_ALERT
} from '../../constants/constants'

const initState = {
    loading: false,
    isAuthenticating: false,
    authStatus: null,
    requestStatus: null,
    alert: '',
    // theme: 'light'
      };


const miscReducer = (state = initState, action) => {
    switch(action.type) {
        case LOADING: 
            return {
                ...state,
                loading: action.payload
            }
        
        case IS_AUTHENTICATING:
            return {
                ...state,
                isAuthenticating: action.payload
            };
        
        case SET_REQUEST_STATUS:
            return {
                ...state,
                requestStatus: action.payload
            }
        
        case SET_AUTH_STATUS:
            return {
                ...state,
                authStatus: action.payload
            }
        case SET_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case CLEAR_ALERT:
        return {
            ...state,
            alert: ''
        }
        default:
            return state;
    }
}

export default miscReducer;