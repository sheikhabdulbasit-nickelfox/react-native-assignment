import React from 'react';
import {StyleSheet, Dimensions, TextInput} from 'react-native';
import {useTheme} from 'react-native-paper';
import {Field} from 'formik';

const {height} = Dimensions.get('window');

const FormField = props => {
  const {
    keyboardType = 'name-phone-pad',
    value,
    placeholder,
    activeFormId,
    fieldName,
    handleBlur,
    onFocus,
    handleChange,
    error,
    touched,
  } = props;

  const {colors, customColors} = useTheme();

  return (
    <Field>
      {() => (
        <TextInput
          style={[
            styles.input,
            activeFormId === fieldName
              ? {borderColor: colors.accent}
              : {borderColor: customColors.disabledBorder},
            touched && error !== undefined && {borderColor: colors.error},
          ]}
          secureTextEntry={fieldName === 'password'}
          keyboardType={keyboardType}
          placeholder={placeholder}
          onChangeText={handleChange(activeFormId)}
          onBlur={handleBlur(fieldName)}
          value={value}
          onFocus={onFocus}
        />
      )}
    </Field>
  );
};

export default FormField;

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    height: height / 13,
    borderRadius: 30,
    borderWidth: 1,
    padding: 15,
  },
});
