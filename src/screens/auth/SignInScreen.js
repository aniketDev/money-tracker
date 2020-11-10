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

const SignInScreen = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Formik>
          <Form>
            <Field type="email" name="email" component={TextInput}></Field>
          </Form>
        </Formik>
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
