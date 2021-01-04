import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authSlice from './features/auth/authSlice';

export const reducer = combineReducers({
  authSlice,
});

export type RootState = ReturnType<typeof reducer>;

export const store = configureStore({reducer});
