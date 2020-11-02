import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Welcome to SignInScreen screen!</Text>
    </View>
  );
};

export const SignInOptions = () => {
  return {};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SignInScreen;
