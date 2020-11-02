import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const SignInForm = () => {
  return (
    <View style={styles.fieldContainer}>
      <Text>Username</Text>
      <TextInput></TextInput>
    </View>
  );
};

export const SignInOptions = () => {
  return {};
};

const styles = StyleSheet.create({
  fieldContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SignInForm;
