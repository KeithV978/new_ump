import { UPDATE_EMAIL, UPDATE_PROFILE } from "../../constants/constants";
import { SELLER_DASHBOARD } from "../../constants/routes";
import { DisplayActionMessage } from "../../helpers/utils";
import { call, put, select } from 'redux-saga/effects'
import { history } from "../../routers";
import firebase from '../../services/firebase'
import { setLoading } from "../actions/misc_actions";
import { updateProfileSuccess } from "../actions/profile_actions";

function* profileSaga({ type, payload }){
    switch(type){
        case UPDATE_EMAIL: {
            try {
                yield put(setLoading(false))
                yield call(firebase.updateEmail, payload.password, payload.newEmail)

                yield put(setLoading(false))
                yield call(history.push, '/profile')
                yield call(DisplayActionMessage, 'Email has been updated successfully!', 'success')
            } catch(error){
                console.log(error.meessage)
            }
            break;
        }

        case UPDATE_PROFILE:{
            try {
                const state = yield select();
                const { email, password } = payload.credentials;
                const { avatarFile } = payload.files;

                yield put(setLoading(true))

                if(email && password && email !== state.profile.email){
                    yield call(firebase.updateEmail, password, email);
                }
                if(avatarFile) {
                    const avatarURL = avatarFile ? yield call(firebase.storeImage, state.auth.id, 'avatar', avatarFile) : payload.updates.avatar;
                    const updates = { ...payload.updates, avatar: avatarURL}

                    yield call(firebase.updateProfile, state.auth.id, updates)
                    yield put(updateProfileSuccess(updates))
                } else {
                    yield call(firebase.updateProfile, state.auth.id, payload.updates)
                    yield put(updateProfileSuccess(payload.updates))
                }
                
                yield put(setLoading(false));
                yield call(history.push, SELLER_DASHBOARD);
                yield call(DisplayActionMessage, 'Profile Updated Successfully!', 'success')
            } catch(error){
                console.log(error);
                yield put(setLoading(false))
                if(error.code === 'auth/wrong-password'){
                    yield call(DisplayActionMessage, 'Wrong password, profile update failed :(', 'error')
                } else {
                    yield call(DisplayActionMessage, `:( Failed to update profile. ${error.message ? error.message : ''}`, 'error')
                }
            }
            break;
        }

        default: {
            throw new Error('Unexpected action type')
        }
    }
}

export default profileSaga;