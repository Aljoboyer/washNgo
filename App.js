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
import { useEffect, useState } from "react";
import SplashScreen from './src/screens/common/SplashScreen';

function App() {
  const [splashScreenShow, setSplashScreenShow] = useState(true)

  useEffect(() => {
    setTimeout(() => setSplashScreenShow(false), 1500)
  },[])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          {
          splashScreenShow ?   <SplashScreen/> : <AppNavigator />
          }
      </PersistGate>
    </Provider>
  );
}

export default App;
