import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native';
import { Input } from 'react-native-elements';
import { Formik, Form, Field } from 'formik';
import { TextInputField } from '../../components/shared/FormFields';
import SignInForm from '../../components/auth/SignInForm';

const SignInScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <SignInForm />
      </View>
    </TouchableWithoutFeedback>
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
