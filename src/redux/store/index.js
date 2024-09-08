import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';

// persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// reducers //
import { api } from '../api/api';
import { rootReducer } from './reducers';

// persist configs //
const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

// persist root reducer //
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // Redux persist
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export default store;
