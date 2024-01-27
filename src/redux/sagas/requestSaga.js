import {
  ADD_REQUEST,
  GET_REQUESTS,
  EDIT_REQUEST,
  DELETE_REQUEST,
  SEARCH_REQUEST,
} from "../../constants/constants";

import {
  getRequestsSuccess,
  editRequestSuccess,
  deleteRequestSuccess,
  searchRequestSuccess,
  clearSearchState
} from "../actions/request_action";

import { DisplayActionMessage } from "../../helpers/utils";
import { call, put, select } from "redux-saga/effects";
import { setLoading, setRequestStatus } from "../actions/misc_actions";
import { history } from "../../routers";
import firebase from "../../services/firebase";
import { REQUESTS } from "../../constants/routes";

function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(error) {
  yield put(setLoading(false));
  yield put(setRequestStatus(error?.message || "Failed to fetch products"));
  console.log("ERROR: ", error);
}

function* handleAction(location, message, status) {
  if (location) yield call(history.push, location);
  yield call(DisplayActionMessage, message, status);
}

function* requestSaga({ type, payload }) {
  switch (type) {
    case ADD_REQUEST: {
      try {
        yield initRequest();

        yield call(firebase.addRequest, payload);

        yield handleAction(undefined, "Request Sent to the Pool", "success");
        yield put(setLoading(false));
      } catch (error) {
        yield handleError(error);
        yield handleAction(
          undefined,
          `The request failed to be add: ${error?.message}`,
          "error"
        );
      }
      break;
    }
    case GET_REQUESTS: {
      try {
        yield initRequest();
        const state = yield select();

        const result = yield call(firebase.getRequests, payload);

        if (result.request.length === 0) {
          handleError("No requests found");
        } else {
          yield put(
            getRequestsSuccess({
              requests: result.requests,
              lastKey: result.lastKey
                ? result.lastKey
                : state.products.lastRefKey,
              total: result.total ? result.total : state.products.total,
            })
          );
          yield put(setRequestStatus(""));
        }

        yield put(setLoading(false));
      } catch (error) {
        console.log(error);
        yield handleError(error);
      }
      break;
    }
    case SEARCH_REQUEST: {
      try {
        yield initRequest();
        yield put(clearSearchState())
        
        const state = yield select();
        const result = yield call(firebase.searchRequests, payload.searchKey)

        if(result.requests.length === 0){
            yield handleError({message: 'No product found.' })
        }else {
          yield put(searchRequestSuccess({
            requests: result.request,
            lastKey: result.lastKey ? result.lastKey : state.products.searchedRequests.lastRefKey,
            total: result.total ? result.total : state.products.searchedRequests.total
          }))
          yield put(setRequestStatus(''));
        }
        yield put(setLoading(false))
      } catch (error) {
        yield handleError(error);
      }
      break;
    }
    case DELETE_REQUEST: {
      try {
          yield initRequest();
          yield call(firebase.deleteRequest, payload)
          yield put(deleteRequestSuccess(payload))
          yield put(setLoading(false))
          yield handleAction(REQUESTS, `Request successfully deleted`, 'success')
      } catch(error){
          yield handleError(error)
          yield handleAction(undefined, `Request failed to be deleted: ${error.message}`, 'error');
      }
  break;
  }
  case EDIT_REQUEST: {
    try{
        yield initRequest();

        yield call(firebase.editProduct, payload.id, payload.updates)
        yield put(editRequestSuccess({
            id: payload.id,
            updates: payload.updates
        }));
        yield handleAction(REQUESTS, 'Request updated successfully', 'success')
        yield put(setLoading(false));
    }catch(error){
        yield handleError(error)
        yield handleAction(undefined, `Update failed: ${error.message}`, 'error');
    }
    break;
}
    default: {
      throw new Error(`Unexpected action type ${type}`);
    }
  }
}

export default requestSaga;
