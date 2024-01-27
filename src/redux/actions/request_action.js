import {
  GET_REQUESTS,
  GET_REQUESTS_SUCCESS,
  ADD_REQUEST,
  EDIT_REQUEST,
  EDIT_REQUEST_SUCCESS,
  DELETE_REQUEST,
  DELETE_REQUEST_SUCCESS,
  SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  ADD_REQUEST_SUCCESS,
  CLEAR_SEARCH_STATE
} from "../../constants/constants";

export const getRequests = () => ({
  type: GET_REQUESTS,
});

export const getRequestsSuccess = (requests) => ({
  type: GET_REQUESTS_SUCCESS,
  payload: requests,
});

export const addRequest = (request) => {
  return{
    type: ADD_REQUEST,
    payload: request,
  }
};

export const addRequestSuccess = (request) => ({
  type: ADD_REQUEST_SUCCESS,
  payload: request,
});

export const editRequest = (id, update) => ({
  type: EDIT_REQUEST,
  payload: { id, update },
});
export const editRequestSuccess = (update) => ({
  type: EDIT_REQUEST_SUCCESS,
  payload: update,
});

export const deleteRequest = (id) => ({
  type: DELETE_REQUEST,
  payload: id,
});

export const deleteRequestSuccess = (id) => ({
  type: DELETE_REQUEST_SUCCESS,
  payload: id,
});

export const searchRequest = (searchKey) => ({
  type: SEARCH_REQUEST,
  payload: {searchKey},
});

export const searchRequestSuccess = (requests) => ({
  type: SEARCH_REQUEST_SUCCESS,
  payload: requests,
});
export const clearSearchState = () => ({
    type: CLEAR_SEARCH_STATE
})