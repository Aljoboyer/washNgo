import {combineReducers} from '@reduxjs/toolkit';
import { userInfoReducer } from '../slices/userSlice';
import { api } from '../api/api';

// add the necessary reducers here //
export const rootReducer = combineReducers({
  userInfo: userInfoReducer,
  [api.reducerPath]: api.reducer,
});
