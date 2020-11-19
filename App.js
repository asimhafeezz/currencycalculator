/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ScreenStack from './src/components/homeScreen';
import Screens from './src/components/screens';


const App = () => {
  return (
        <Screens />
  );
};

export default App;
