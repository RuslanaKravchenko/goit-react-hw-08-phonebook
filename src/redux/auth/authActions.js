import { createAction } from '@reduxjs/toolkit';

const signUpRequest = createAction('auth/signUpRequest');
const signUpSuccess = createAction('auth/signUpSuccess');
const signUpError = createAction('auth/signUpError');

const signInRequest = createAction('auth/signInRequest');
const signInSuccess = createAction('auth/signInSuccess');
const signInError = createAction('auth/signInError');

const getNewTokenRequest = createAction('auth/getNewTokenRequest');
const getNewTokenSuccess = createAction('auth/getNewTokenSuccess');
const getNewTokenError = createAction('auth/getNewTokenError');

const updateUserRequest = createAction('auth/updateUserRequest');
const updateUserSuccess = createAction('auth/updateUserSuccess');
const updateUserError = createAction('auth/updateUserError');

const updateUserAvatar = createAction('auth/updateUserAvatar');

const getCurrentUserAvatarRequest = createAction(
  'auth/getCurrentUserAvatarRequest',
);
const getCurrentUserAvatarSuccess = createAction(
  'auth/getCurrentUserAvatarSuccess',
);

const getCurrentUserAvatarError = createAction(
  'auth/getCurrentUserAvatarError',
);

const signOut = createAction('auth/signOut');

const showProfile = createAction('auth/showProfile');

const authActions = {
  signUpRequest,
  signUpSuccess,
  signUpError,
  signInRequest,
  signInSuccess,
  signInError,
  signOut,
  getNewTokenRequest,
  getNewTokenSuccess,
  getNewTokenError,
  showProfile,
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
  updateUserAvatar,
  getCurrentUserAvatarRequest,
  getCurrentUserAvatarSuccess,
  getCurrentUserAvatarError,
};

export default authActions;
