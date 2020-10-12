import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/user/Login';

const Stack = createStackNavigator();

export const UserNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen component={Login} name="Login" />
  </Stack.Navigator>
);

export default UserNavigator;
