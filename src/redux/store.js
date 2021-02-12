import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import contactsReducer from './contacts/contactsReducer';
import { noticeReducer } from './notice/noticeReducer';
import { modalReducer } from './modal/modalReducer';
import authReducer from './auth/authReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    phonebookContacts: contactsReducer,
    phonebookNotice: noticeReducer,
    phonebookModal: modalReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
