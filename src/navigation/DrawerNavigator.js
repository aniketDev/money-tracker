import React from 'react';
import {
  createDrawerNavigator,
  DrawerItemList
} from '@react-navigation/drawer';
import Login from '../screens/user/Login';
import Signup from '../screens/user/Signup';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Colors } from '../constants';

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
      <Drawer.Screen component={Login} name="Login" />
      <Drawer.Screen component={Signup} name="Signup" />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
