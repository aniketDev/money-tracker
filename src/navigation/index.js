import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';

export default () => {
  const isAuthenticated = false;

  return (
    <NavigationContainer>
      {isAuthenticated && <DrawerNavigator />}
      {!isAuthenticated && <AuthNavigator />}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
