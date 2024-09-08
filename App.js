/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import AppNavigator from './src/service/navigationService/app-navigator';
import {PersistGate} from 'redux-persist/integration/react';

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
