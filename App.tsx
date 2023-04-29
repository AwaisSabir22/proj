

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



import { Provider } from 'react-redux';
import store from './store';
import Movies from './components/Movies';

const App = () => {
  return (

    <Provider store={store}>
    <View style={styles.container}>
      <Movies />
    </View>
  </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;
