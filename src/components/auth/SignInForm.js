import { Field, Formik } from 'formik';
import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { TextInputField } from '../shared/FormFields';

const SignInForm = () => {
  return (
    <View style={styles.formContainer}>
      <Formik>
        {({ handleSubmit }) => (
          <View>
            <Field
              name="email"
              component={TextInputField}
              placeholder="username"
            ></Field>
          </View>
        )}
      </Formik>
    </View>
  );
};

export const SignInOptions = () => {
  return {};
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SignInForm;
