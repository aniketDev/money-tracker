import React from 'react';
import {
  createDrawerNavigator,
  DrawerItemList
} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Colors } from '../constants';
import AppNavigator from './AppNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const drawerContent = (props) => (
    <View style={{ paddingTop: 10 }}>
      <SafeAreaView>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </View>
  );

  return (
    <Drawer.Navigator
      drawerContent={drawerContent}
      drawerContentOptions={{
        activeTintColor: Colors.primary
      }}
    >
      <Drawer.Screen component={AppNavigator} name="Home" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
