import axios from 'axios';
import contactsOperations from '../contacts/contactsOperations';
import authActions from './authActions';

const token = {
  set(token) {
    axios.defaults.headers.common['Authorization'] = token;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUpOperation = user => async dispatch => {
  dispatch(authActions.signUpRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });
    token.set(response.data.idToken);
    dispatch(authActions.signUpSuccess({ ...response.data, name: user.name }));
  } catch (error) {
    dispatch(authActions.signUpError(error.message));
  }
};

const signInOperation = user => async dispatch => {
  dispatch(authActions.signInRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });
    token.set(response.data.idToken);

    dispatch(authActions.signInSuccess(response.data));
  } catch (error) {
    dispatch(authActions.signInError(error.message));
  }
};

const refreshTokenOperation = () => async (dispatch, getState) => {
  const refreshToken = getState().auth.token.refreshToken;
  dispatch(authActions.getNewTokenRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_REFRESH_TOKEN, {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    });
    token.set(response.data.idToken);
    dispatch(authActions.getNewTokenSuccess(response.data));

    dispatch(contactsOperations.getContacts());
  } catch (error) {
    dispatch(authActions.getNewTokenError(error.message));
    dispatch(authActions.signOut());
  }
};

const updateUserProfileOperation = user => async (dispatch, getState) => {
  const idToken = getState().auth.token.idToken;
  const isAuth = getState().auth.token.isAuth;
  dispatch(authActions.updateUserRequest());
  try {
    const response = await axios.post(
      process.env.REACT_APP_UPDATE_USER_PROFILE,
      {
        ...user,
        idToken: idToken,
        returnSecureToken: true,
      },
    );

    dispatch(authActions.updateUserSuccess(response.data));
  } catch (error) {
    if (isAuth && error.message === 'Request failed with status code 400') {
      dispatch(authActions.signOut());
    } else dispatch(authActions.updateUserError(error.message));
  }
};

export {
  signUpOperation,
  signInOperation,
  refreshTokenOperation,
  updateUserProfileOperation,
};
