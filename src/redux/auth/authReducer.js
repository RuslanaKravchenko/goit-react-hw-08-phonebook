import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authActions from './authActions';

const initialUserState = {
  displayName: null,
  photoUrl: '',
  email: null,
  localId: '',
};

const userReducer = createReducer(initialUserState, {
  [authActions.signUpSuccess]: (state, { payload }) => ({
    ...state,
    email: payload.email,
    localId: payload.localId,
    name: payload.name,
  }),
  [authActions.signInSuccess]: (state, { payload }) => ({
    ...state,
    email: payload.email,
    localId: payload.localId,
  }),
  [authActions.signOut]: () => initialUserState,
  // [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const initialToken = {
  idToken: '',
  refreshToken: '',
  isAuth: false,
};

const tokenReducer = createReducer(initialToken, {
  [authActions.signUpSuccess]: (state, { payload }) => ({
    ...state,
    idToken: payload.idToken,
    refreshToken: payload.refreshToken,
    isAuth: true,
  }),
  [authActions.signInSuccess]: (state, { payload }) => ({
    ...state,
    idToken: payload.idToken,
    refreshToken: payload.refreshToken,
    isAuth: true,
  }),
  [authActions.signOut]: () => initialToken,
  [authActions.getNewTokenSuccess]: (state, { payload }) => ({
    ...state,
    idToken: payload.id_token,
    refreshToken: payload.refresh_token,
  }),
});

const errorReducer = createReducer(null, {
  [authActions.signUpError]: (_, { payload }) => payload,
  [authActions.signInError]: (_, { payload }) => payload,
  [authActions.signOut]: () => null,
  [authActions.getNewTokenError]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(false, {
  [authActions.signUpRequest]: () => true,
  [authActions.signUpSuccess]: () => false,
  [authActions.signUpError]: () => false,

  [authActions.signInRequest]: () => true,
  [authActions.signInSuccess]: () => false,
  [authActions.signInError]: () => false,
});

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['name', 'email', 'localId'],
};

const tokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['idToken', 'refreshToken', 'isAuth'],
};

export default combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  token: persistReducer(tokenPersistConfig, tokenReducer),
  error: errorReducer,
  loading: loadingReducer,
});
