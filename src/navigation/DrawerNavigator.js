import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './AppNavigator';
import { Colors } from '../constants';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const screenOptions = {
    title: 'Home page',
    headerStyle: {
      backgroundColor: Colors.accent
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerShown: false,
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
          <Item
            title="Cart"
            iconName="md-menu"
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      );
    }
  }

  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Drawer.Screen component={AppNavigator} name="Home" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
