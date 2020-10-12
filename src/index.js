import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';

const initialData = {};
const store = configureStore(initialData);

export default () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Welcome to money tracker app</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
