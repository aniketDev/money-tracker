import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'open-sans' }}>Welcome to login screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Login;
