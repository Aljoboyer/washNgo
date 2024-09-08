import {createSlice} from '@reduxjs/toolkit';
// import {persistReducer} from 'redux-persist';

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: {},
  },
  reducers: {
    saveuserInfoInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    removeuserInfoInfo: (state, action) => {
      state.userInfo = null;
    },
  },
});

export const {saveuserInfoInfo, removeuserInfoInfo} =
  userInfoSlice.actions;

export const userInfoReducer = userInfoSlice.reducer;
