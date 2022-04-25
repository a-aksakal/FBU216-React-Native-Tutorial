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

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      {/* <ComponentSample /> */}
      <FlatListSample></FlatListSample>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 800,
  },
});

export default App;
