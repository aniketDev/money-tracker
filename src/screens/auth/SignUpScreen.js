import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to SignUpScreen screen!</Text>
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

export default SignUpScreen;
