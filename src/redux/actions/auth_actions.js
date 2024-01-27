import * as type from '../../constants/constants'

export const signIn = (email, password) => ({
    type: type.SIGNIN,
    payload: {
        email,
        password
    }
});

export const signInSuccess = (user) => ({
  type: type.SIGNIN_SUCCESS,
  payload: user
});

export const signInFailure = (error) => ({
  type: type.SIGNIN_FAILURE,
  payload: error
});

export const signInWithGoogle = () => ({
    type: type.SIGNIN_WITH_GOOGLE
});


export const signInWithFacebook = () => ({
    type: type.SIGNIN_WITH_FACEBOOK
  });


export const signUp = (user) => ({
    type: type.SIGNUP,
    payload: user
});



  export const setAuthPersistence = () => ({
    type: type.SET_AUTH_PERSISTENCE
  });
  
  export const signOut = () => ({
    type: type.SIGNOUT
  });

  export const signOutFailure = (error) => ({
    type: type.SIGNOUT_FAILURE,
    payload: error
  });
  
  export const signOutSuccess = () => ({
    type: type.SIGNOUT_SUCCESS
  });
  
  export const onAuthStateChanged = () => ({
    type: type.ON_AUTHSTATE_CHANGED
  });
  
  export const onAuthStateSuccess = (user) => ({
    type: type.ON_AUTHSTATE_SUCCESS,
    payload: user 
  });
  
  export const onAuthStateFail = (error) => ({
    type: type.ON_AUTHSTATE_FAIL,
    payload: error
  });
  
  export const resetPassword = (email) => ({
    type: type.RESET_PASSWORD,
    payload: email
  });
  
  