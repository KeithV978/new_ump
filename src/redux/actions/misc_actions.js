import {
    IS_AUTHENTICATING,
    LOADING,
    SET_AUTH_STATUS,
    SET_REQUEST_STATUS,
    SET_ALERT,
    CLEAR_ALERT
}
from '../../constants/constants'

export const setLoading = (bool = true) => ({
    type: LOADING,
    payload: bool
})

export const setAuthenticating = (bool = true) => ({
    type: IS_AUTHENTICATING,
    payload: bool
})

export const setRequestStatus = (status) => ({
    type: SET_REQUEST_STATUS,
    payload: status
})

export const setAuthStatus = (status = null) => ({
    type: SET_AUTH_STATUS,
    payload: status
})

export const setAlert = (msg) => ({
    type: SET_ALERT,
    payload: msg
})
export const clearAlert = () => ({
    type: CLEAR_ALERT
})
