import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignInScreen, SignUpScreen } from '../screens/auth';
import { SignInOptions } from '../screens/auth/SignInScreen';

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  const defaultNavOptions = {
    headerShown: false
  };

  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen
        component={SignInScreen}
        name="SignIn"
        options={SignInOptions}
      />
      <Stack.Screen component={SignUpScreen} name="SignUp" />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
