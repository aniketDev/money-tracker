import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import { Colors } from '../constants';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { HeaderButtonComponent } from '../components/UI';

const Stack = createStackNavigator();

export const AppNavigator = ({ navigation }) => {
  const defaultNavOptions = {
    title: 'Fallback title',
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTintColor: 'white',
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
  };

  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen component={TabNavigator} name="Tab" />
    </Stack.Navigator>
  );
};

export default AppNavigator;
