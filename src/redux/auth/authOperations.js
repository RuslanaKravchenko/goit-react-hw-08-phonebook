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
    dispatch(authActions.getNewTokenSuccess(response.data));
    console.log('Новый токен получен');
    dispatch(contactsOperations.getContacts());
    console.log('Сделан запрос за контактами');
  } catch (error) {
    dispatch(authActions.getNewTokenError(error.message));
  }
};

const updateUserProfileOperation = user => async (dispatch, getState) => {
  const idToken = getState().auth.token.idToken;
  // dispatch(authActions.getNewTokenRequest());
  try {
    const response = await axios.post(
      process.env.REACT_APP_UPDATE_USER_PROFILE,
      {
        ...user,
        idToken: idToken,
        returnSecureToken: true,
      },
    );
    console.log(response);
    // dispatch(authActions.getNewTokenSuccess(response.data));
  } catch (error) {
    // dispatch(authActions.getNewTokenError(error.message));
  }
};

export {
  signUpOperation,
  signInOperation,
  refreshTokenOperation,
  updateUserProfileOperation,
};
