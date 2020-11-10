import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { ErrorMessage } from 'formik';

export const TextInputField = ({
  field: { name, value, onChange, onBlur }, // { name, value, onChange, onBlur }
  form: { touched, errors, handleChange, handleBlur }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <View>
    <TextInput
      style={{}}
      onChangeText={handleChange(name)}
      value={value}
      onBlur={handleBlur}
    ></TextInput>
    <ErrorMessage name={name} component={Text} />
  </View>
);
