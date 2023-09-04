import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text} from 'react-native';
import TabNavigator from './TabNavigator';
import { Colors } from '../constants';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { HeaderButtonComponent } from '../components/UI';

const AppNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
  const defaultNavOptions = {
    title: 'Fallback title',
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
  };

  return (
    <Stack.Navigator screenOptions={defaultNavOptions}>
      <Stack.Screen component={TabNavigator} name="Tab" options={{ title: 'My home', headerShown: true }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
