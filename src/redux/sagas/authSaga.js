import {
  ON_AUTHSTATE_FAIL,
  ON_AUTHSTATE_SUCCESS,
  RESET_PASSWORD,
  SET_AUTH_PERSISTENCE,
  SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNIN_WITH_FACEBOOK,
  SIGNIN_WITH_GOOGLE,
  SIGNOUT,
  SIGNUP,
} from "../../constants/constants";
import { SIGNIN as ROUTE_SIGNIN } from "../../constants/routes";
import { Person2Rounded as defaultAvatar } from "@mui/icons-material";
import { call, put } from "@redux-saga/core/effects";
import { signInSuccess, signOutSuccess } from "../actions/auth_actions";
import { resetFilter } from "../actions/filter_actions";
import { setAuthenticating, setAuthStatus } from "../actions/misc_actions";
import { clearProfile, setProfile } from "../actions/profile_actions";
import { history } from "../../routers";
import firebase from "../../services/firebase";

function* handleError(error) {
  // console.log(error.code)
  const obj = { success: false, type: "auth", isError: true };
  yield put(setAuthenticating(false));

  switch (error.code) {
    case "auth/network-request-failed":
      yield put(
        setAuthStatus({
          ...obj,
          message: "Network error has occured. Please try again.",
        })
      );
      break;
    case "auth/email-already-in-use":
      yield put(
        setAuthStatus({
          ...obj,
          message: "Email is already in use. Please use another email",
        })
      );
      break;
    case "auth/weak-password":
      yield put(
        setAuthStatus({
          ...obj,
          message: "Password should be at least 6 characters",
        })
      );
      break;
    case "auth/wrong-password":
      yield put(
        setAuthStatus({ ...obj, message: "Incorrect email or password" })
      );
      break;
    case "auth/user-not-found":
      yield put(
        setAuthStatus({ ...obj, message: "Incorrect email or password" })
      );
      break;
    case "auth/reset-password-error":
      yield put(
        setAuthStatus({
          ...obj,
          message:
            "Faled to send password reset email. Did you type your email correctly?",
        })
      );
      break;
    // case 'auth/invalid-value-(email)':
    //     yield put(setAuthStatus({ ...obj, message: 'Invalid Value' }));
    //     break
    default:
      yield put(setAuthStatus({ ...obj, message: error.message }));
      break;
  }
}

function* initRequest() {
  yield put(setAuthenticating());
  yield put(setAuthStatus({}));
}

function* authSaga({ type, payload }) {
  switch (type) {
    case SIGNIN:
      try {
        let { email, password } = payload;
        yield initRequest();
        const userCredential = yield call(firebase.signIn, email, password);
        // console.log(userCredential.user)
        yield put({ type: SIGNIN_SUCCESS, payload: userCredential.user });
        yield put({ type: ON_AUTHSTATE_SUCCESS, payload: userCredential.user });
      } catch (error) {
        yield put({ type: SIGNIN_FAILURE, payload: error.message });
        yield handleError(error);
      }
      break;
    case SIGNUP:
      try {
        yield initRequest();
        // return console.log(payload.email, payload.password)
        const ref = yield call(
          firebase.createAccount,
          payload.email,
          payload.password
        );
        // const fullname = payload.fullname.split(' ').map((name) => name[0].toUpperCase().concat(name.substring(1))).join(' ');

        const sellerPayload = {
          sellerId: ref.user.uid,
          displayName: payload.sellers_name,
          email: payload.email,
          address: "",
          photoURL: "",
          phoneNumber: payload.phone,
          role: "SELLER",
          dateJoined: ref.user.metadata.creationTime || new Date().getTime(),
        };
        // console.log("sellerPayload")

        yield call(firebase.addSeller, ref.user.uid, sellerPayload);

        // console.log(sellerPayload)
        // yield put(setProfile(sellerPayload))
        yield call(firebase.confirmEmail, ref.user);

        // console.log(verificationLinkSent)
        yield put(
          setAuthStatus({
            success: true,
            type: "signup",
            message:
              "A link has been sent to your email for verification. Kindly use the link to conlcude your sign up.",
            verified: false,
          })
        );
        yield put(setAuthenticating(false));
      } catch (error) {
        yield handleError(error);
      }
      break;
    case SIGNIN_WITH_GOOGLE:
      try {
        yield initRequest();
        yield call(firebase.signInWithGoogle);
      } catch (error) {
        yield handleError(error);
      }
      break;
    case SIGNIN_WITH_FACEBOOK:
      try {
        yield initRequest();
        yield call(firebase.signInWithFacebook);
      } catch (error) {
        yield handleError(error);
      }
      break;
    case SIGNOUT: {
      try {
        yield initRequest();
        yield call(firebase.signOut);
        yield put(clearProfile());
        yield put(resetFilter());
        yield put(signOutSuccess());
        yield put(setAuthenticating(false));
        yield call(history.push, ROUTE_SIGNIN);
        yield call(window.location.reload());
      } catch (error) {
        yield handleError(error);
      }
      break;
    }
    case RESET_PASSWORD: {
      try {
        yield initRequest();
        yield call(firebase.passwordReset, payload);
        yield put(
          setAuthStatus({
            success: true,
            type: "reset",
            message:
              "A password rest email has been sent to your provided mail box",
          })
        );
        yield put(setAuthenticating(false));
      } catch (error) {
        handleError({ code: "auth/reset-password-error" });
      }
      break;
    }
    case ON_AUTHSTATE_SUCCESS: {
      const snapshot = yield call(firebase.getSeller, payload.uid);

      if (snapshot.data()) {
        const user = snapshot.data();
        // console.log(user)
        yield put(setProfile(user));
        yield put(
          signInSuccess({
            sellerId: user.sellerId,
            role: user.role,
            provider: payload.providerData[0].providerId,
          })
        );
      } else if (
        payload.providerData[0].providerId !== "password" &&
        !snapshot.data()
      ) {
        // console.log("here")
        const user = {
          displayName: payload.displayName ? payload.displayName : "User",
          photoURL: payload.photoURL ? payload.photoURL : defaultAvatar,
          email: payload.email,
          address: "",
          phoneNumber: "",
          role: "SELLER",
          dateJoined: payload.metadata.creationTime,
        };
        yield call(firebase.addSeller, payload.uid, user);
        yield put(setProfile(user));
        yield put(
          signInSuccess({
            id: payload.uid,
            role: user.role,
            provider: payload.providerData[0].providerId,
          })
        );
      }

      yield put(
        setAuthStatus({
          success: true,
          type: "auth",
          isError: false,
          message: "Successfully signed in. Redirecting...",
        })
      );
      yield put(setAuthenticating(false));
      break;
    }
    case ON_AUTHSTATE_FAIL: {
      yield put(clearProfile());
      yield put(signOutSuccess());
      break;
    }
    case SET_AUTH_PERSISTENCE: {
      try {
        yield call(firebase.setAuthPersistence);
      } catch (error) {
        handleError(error);
      }
      break;
    }
    default: {
      throw new Error("Unexpected Action Type.");
    }
  }
}

export default authSaga;
