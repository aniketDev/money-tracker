import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/user/Login';
import Signup from '../screens/user/Signup';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen component={Login} name="Login" />
      <Tab.Screen component={Signup} name="Signup" />
    </Tab.Navigator>
  );
};

export default TabNavigator;
