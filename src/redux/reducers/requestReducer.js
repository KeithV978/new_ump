import {
  ADD_REQUEST,
  EDIT_REQUEST_SUCCESS,
  GET_REQUESTS_SUCCESS,
  DELETE_REQUEST_SUCCESS,
  SEARCH_REQUEST_SUCCESS,
  CLEAR_SEARCH_STATE
} from "../../constants/constants";

const requestReducer = (
  state = {
    name: "",
    phone: "",
    category: "",
    headline: "",
    expiry_date: new Date().toLocaleDateString(),
  },
  action
) => {
  switch (action.type) {
    case ADD_REQUEST:
      return {
        ...state,
        requests: [...state.requests, action.payload],
      };
    case EDIT_REQUEST_SUCCESS:
      return {
        ...state,
        requests: state.requests.map((requests) => {
          if (requests.id === action.payload.id) {
            return {
              ...requests,
              ...action.payload.updates,
            };
          }
          return requests;
        }),
      };
    case GET_REQUESTS_SUCCESS:
      return {
        ...state,
        total: action.payload.total,
        lastRefKey: action.payload.lastKey,
        requests: [...state.requests, ...action.payload.requests],
      };
    case DELETE_REQUEST_SUCCESS:
      return {
        ...state,
        requests: state.items.filter(
          (requests) => requests.id !== action.payload
        ),
      };
    case SEARCH_REQUEST_SUCCESS:
        let {requests, lastKey, total} = action.payload;
        return {
            ...state,
            searchedRequests: {
                lastRefKey: lastKey,
                total: total,
                requests: requests
            }
        }
    case CLEAR_SEARCH_STATE:
        return {
            ...state,
            searchedRequests: []
        }
    default:
      break;
  }
};

export default requestReducer;
