/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ComponentSample from './src/ComponentSample/ComponentSample';
import FlatListSample from './src/ComponentSample/FlatListSample';
import Supplier from './src/NavigationSample/Supplier';
import SupplierDetail from './src/NavigationSample/SupplierDetail';
import MainTab from './src/navigations/tab/MainTab';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainTab></MainTab>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 800,
  },
});

export default App;
