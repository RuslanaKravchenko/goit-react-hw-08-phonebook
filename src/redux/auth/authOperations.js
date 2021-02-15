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
    await axios.post(
      `${process.env.REACT_APP_BASE_URL}/users/${response.data.localId}.json?auth=${response.data.idToken}`,
      { avatar: '' },
    );
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

    const userResponseAvatar = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/users/${response.data.localId}.json?auth=${response.data.idToken}`,
    );

    userResponseAvatar.data.avatar &&
      dispatch(
        authActions.getCurrentUserAvatarSuccess(userResponseAvatar.data.avatar),
      );

    token.set(response.data.idToken);

    dispatch(authActions.signInSuccess({ ...response.data }));
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

const updateUserProfileOperation = (user, avatar) => async (
  dispatch,
  getState,
) => {
  const idToken = getState().auth.token.idToken;
  const localId = getState().auth.user.localId;
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

    const responseAvatar = await axios.put(
      `/users/${localId}.json?auth=${idToken}`,
      { avatar: avatar },
    );
    dispatch(authActions.updateUserAvatar(responseAvatar.data.avatar));
  } catch (error) {
    dispatch(authActions.signOut());
  }
};

const getCurrentUserAvatar = () => async (dispatch, getState) => {
  const idToken = getState().auth.token.idToken;
  const localId = getState().auth.user.localId;
  dispatch(authActions.getCurrentUserAvatarRequest());
  try {
    const userResponseAvatar = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/users/${localId}.json?auth=${idToken}`,
    );

    userResponseAvatar.data.avatar &&
      dispatch(
        authActions.getCurrentUserAvatarSuccess(userResponseAvatar.data.avatar),
      );
  } catch (error) {
    dispatch(authActions.getCurrentUserAvatarError(error.message));
  }
};

export {
  signUpOperation,
  signInOperation,
  refreshTokenOperation,
  updateUserProfileOperation,
  getCurrentUserAvatar,
};
