import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store';
import RootNavigator from './navigation';

const initialData = {};
const store = configureStore(initialData);

export default () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
