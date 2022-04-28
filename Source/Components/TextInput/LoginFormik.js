import React, {Fragment, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Formik} from 'formik';
import {Button} from 'react-native-paper';
import PText from '@components/Text/PText';
import FormField from './FormField';
import {
  LoginValidationModel,
  LoginInitialValues,
} from '@models/LoginValdationModel';

const {height} = Dimensions.get('window');

const LoginFormik = ({submitForm, loading}) => {
  const [activeFormId, setActiveFormId] = useState('');

  return (
    <Formik
      initialValues={LoginInitialValues}
      validationSchema={LoginValidationModel}
      validateOnMount
      onSubmit={values => {
        submitForm(values);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        errors,
        touched,
      }) => (
        <Fragment>
          <FormField
            fieldName="email"
            keyboardType="email-address"
            placeholder="Enter Email"
            value={values.email}
            handleBlur={handleBlur}
            onFocus={() => setActiveFormId('email')}
            activeFormId={activeFormId}
            setActiveFormId={setActiveFormId}
            handleChange={handleChange}
            error={errors.email}
            touched={touched.email}
          />

          {touched.email && errors.email && (
            <PText style={styles.errorText} textColor="error">
              {errors.email}
            </PText>
          )}

          <FormField
            fieldName="password"
            value={values.password}
            placeholder="Enter Password"
            handleBlur={handleBlur}
            onFocus={() => setActiveFormId('password')}
            activeFormId={activeFormId}
            setActiveFormId={setActiveFormId}
            handleChange={handleChange}
            error={errors.password}
            touched={touched.password}
          />

          {touched.password && errors.password && (
            <PText style={styles.errorText} textColor="error">
              {errors.password}
            </PText>
          )}

          <Button
            style={styles.submitBtn}
            mode="contained"
            disabled={!isValid}
            onPress={handleSubmit}>
            {loading ? 'Logging in...' : 'Login'}
          </Button>
        </Fragment>
      )}
    </Formik>
  );
};

export default LoginFormik;

const styles = StyleSheet.create({
  submitBtn: {
    margin: 20,
    borderRadius: 100,
    height: height / 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    marginTop: 5,
    marginLeft: 20,
  },
});
