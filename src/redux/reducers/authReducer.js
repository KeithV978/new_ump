import  {
    SIGNIN_SUCCESS,
    SIGNIN_FAILURE,
    SIGNOUT_FAILURE,
    SIGNOUT_SUCCESS
} from '../../constants/constants';



const authReducer = (state = null, action) => {
    switch(action.type) {
        case SIGNIN_SUCCESS:
            return { ...state, user: action.payload, error: null}
        case SIGNIN_FAILURE:
        case SIGNOUT_FAILURE:
                return { ...state, user: null, error: action.payload}
        case SIGNOUT_SUCCESS:
            return null;
        default: 
        return state;
    }
};

export default authReducer;