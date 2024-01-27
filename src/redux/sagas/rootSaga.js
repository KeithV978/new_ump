import * as ACTION from '../../constants/constants'
import { takeLatest } from 'redux-saga/effects'
import authSaga from './authSaga'
import productSaga from './productSaga'
// import auctionsSaga from './auctionsSaga'
import profileSaga from './profileSaga'
import requestSaga from './requestSaga'


function* rootSaga() {
    yield takeLatest([
        ACTION.SIGNIN,
        ACTION.SIGNUP,
        ACTION.SIGNOUT,
        ACTION.SIGNIN_WITH_FACEBOOK,
        ACTION.SIGNIN_WITH_GOOGLE,
        ACTION.ON_AUTHSTATE_CHANGED,
        ACTION.ON_AUTHSTATE_SUCCESS,
        ACTION.ON_AUTHSTATE_FAIL,
        ACTION.SET_AUTH_PERSISTENCE,
        ACTION.RESET_PASSWORD
    ], authSaga);

    yield takeLatest([
        ACTION.ADD_PRODUCT,
        ACTION.SEARCH_PRODUCT,
        ACTION.REMOVE_PRODUCT,
        ACTION.EDIT_PRODUCT,
        ACTION.GET_RECENT_PRODUCTS,
        ACTION.ADD_BID,
        ACTION.DELETE_BID
    ], productSaga);

    yield takeLatest([
        ACTION.UPDATE_EMAIL,
        ACTION.UPDATE_PROFILE
    ], profileSaga)

    yield takeLatest([
        ACTION.SEARCH_REQUEST,
        ACTION.ADD_REQUEST,
        ACTION.DELETE_REQUEST,
        ACTION.EDIT_REQUEST,
        ACTION.GET_REQUESTS,
    ], requestSaga)

    // yield takeLatest([
    //     ACTION.SEARCH_AUCTIONS,
    //     ACTION.ADD_AUCTION,
    //     ACTION.UPDATE_AUCTION,
    //     ACTION.REMOVE_AUCTION,
    //     ACTION.GET_RECENT_AUCTIONS,
    //     ACTION.GET_SINGLE_AUCTIONS_SUCCESS,
    //     ACTION.GET_RELETATED_AUCTIONS,
    // ], auctionsSaga)
}

export default rootSaga;