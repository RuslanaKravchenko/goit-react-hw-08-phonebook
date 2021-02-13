import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authActions from './authActions';

const initialUserState = {
  displayName: '',
  avatar: '',
  email: '',
  localId: '',
  isAuth: false,
  showProfile: false,
};

const userReducer = createReducer(initialUserState, {
  [authActions.signUpSuccess]: (state, { payload }) => ({
    ...state,
    email: payload.email,
    localId: payload.localId,
    isAuth: true,
  }),
  [authActions.signInSuccess]: (state, { payload }) => ({
    ...state,
    email: payload.email,
    localId: payload.localId,
    displayName: payload.displayName,
    isAuth: true,
  }),

  [authActions.getCurrentUserAvatarSuccess]: (state, { payload }) => ({
    ...state,
    avatar: payload,
  }),

  [authActions.updateUserAvatar]: (state, { payload }) => ({
    ...state,
    avatar: payload,
  }),

  [authActions.signOut]: () => initialUserState,
  [authActions.showProfile]: state => ({
    ...state,
    showProfile: !state.showProfile,
  }),

  [authActions.updateUserSuccess]: (state, { payload }) => ({
    ...state,
    email: payload.email,
    displayName: payload.displayName,
  }),
});

const initialToken = {
  idToken: '',
  refreshToken: '',
};

const tokenReducer = createReducer(initialToken, {
  [authActions.signUpSuccess]: (state, { payload }) => ({
    ...state,
    idToken: payload.idToken,
    refreshToken: payload.refreshToken,
  }),
  [authActions.signInSuccess]: (state, { payload }) => ({
    ...state,
    idToken: payload.idToken,
    refreshToken: payload.refreshToken,
  }),
  [authActions.signOut]: () => initialToken,
  [authActions.getNewTokenSuccess]: (state, { payload }) => ({
    ...state,
    idToken: payload.id_token,
    refreshToken: payload.refresh_token,
  }),
  [authActions.updateUserSuccess]: (state, { payload }) => ({
    ...state,
    idToken: payload.idToken,
    refreshToken: payload.refreshToken,
  }),
});

const errorReducer = createReducer(null, {
  [authActions.signUpError]: (_, { payload }) => payload,
  [authActions.signInError]: (_, { payload }) => payload,
  [authActions.signOut]: () => null,
  [authActions.getNewTokenError]: (_, { payload }) => payload,
  [authActions.updateUserError]: (_, { payload }) => payload,
  [authActions.getCurrentUserAvatarError]: (_, { payload }) => payload,
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
  whitelist: ['displayName', 'email', 'localId', 'isAuth'],
};

const tokenPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['idToken', 'refreshToken'],
};

export default combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  token: persistReducer(tokenPersistConfig, tokenReducer),
  error: errorReducer,
  loading: loadingReducer,
});
