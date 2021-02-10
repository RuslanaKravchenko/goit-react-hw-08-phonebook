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

const signOut = createAction('auth/signOut');

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
};

export default authActions;
