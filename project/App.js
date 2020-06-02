import React from 'react';
import 'react-native-gesture-handler';
//import LoginScreen from './src/View/login/LoginScreen';
import MainNavigator from './src/Navigator/MainNavigator';

import {decode, encode} from 'base-64';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

const App: () => React$Node = () => {
  return (
    <MainNavigator />
);
};

export default App;

