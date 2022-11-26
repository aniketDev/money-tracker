import React from 'react';
import {
  createDrawerNavigator,
  DrawerItemList
} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../constants';
import AppNavigator from './AppNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const drawerContent = (props) => (
    <View style={styles.drawerListContainer}>
      <SafeAreaView>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </View>
  );

  return (
    <Drawer.Navigator
    initialRouteName="Home"
      // drawerContent={drawerContent}
      // screenOptions={{
      //   activeTintColor: Colors.primary
      // }}
    >
      <Drawer.Screen component={AppNavigator} name="Home" />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerListContainer: {
    padding: 10
  }
});

export default DrawerNavigator;
