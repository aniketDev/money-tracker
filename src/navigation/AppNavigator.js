import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
import { Colors } from '../constants';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { HeaderButtonComponent } from '../components/UI';

const Stack = createStackNavigator();
const defaultNavOptions = {
  title: 'Fallback title',
  headerStyle: {
    backgroundColor: Colors.primary
  },
  headerTintColor: 'white',
  headerLeft: (navData) => {
    console.log(navData);
    return (
      <HeaderButtons HeaderButtonComponent={HeaderButtonComponent}>
        <Item
          title="Cart"
          iconName="md-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    );
  }
};

export const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen component={TabNavigator} name="Tab" />
    <Stack.Screen component={DrawerNavigator} name="Drawer" />
  </Stack.Navigator>
);

export default AppNavigator;
