import {
  CLEAR_PROFILE,
  SET_PROFILE,
  UPDATE_PROFILE_SUCCESS,
} from "../../constants/constants";
// import {v4 as uuidv4} from 'uuid'

// import profile from '@mui/icons-material/Person2Rounded';

// const initState = {
//   id: "",
//   displayName: "",
//   email: "",
//   address: "",
//   photoURL: "",
//   dateJoined: "",
//   sellersId: "",
//   role: "SELLER",
//   phoneNumber: "",
// };

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case CLEAR_PROFILE:
      return null;
    default:
      return state;
  }
};

export default profileReducer;
