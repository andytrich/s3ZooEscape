import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import EscapedAnimalDisplay from './screens/escapedAnimalDisplay';
import ZooAnimalMonitor from './screens/zooAnimalMonitor';
import { Provider } from 'react-redux';
import store from './Redux/store';

export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <ZooAnimalMonitor></ZooAnimalMonitor>
      <EscapedAnimalDisplay></EscapedAnimalDisplay>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
