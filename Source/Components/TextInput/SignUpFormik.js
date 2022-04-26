import React, {useState, Fragment} from 'react';
import {StyleSheet, Dimensions, Text} from 'react-native';
import {Formik} from 'formik';
import {Button} from 'react-native-paper';
import {
  SignupInitialValues,
  SignupValidationModel,
} from '@models/SignUpValidationModel';
import FormField from '@components/TextInput/FormField';
import PText from '@components/Text/PText';

const {height} = Dimensions.get('window');

const SignUpFormik = ({submitForm}) => {
  const [activeFormId, setActiveFormId] = useState('');

  return (
    <Formik
      initialValues={SignupInitialValues}
      validationSchema={SignupValidationModel}
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
            placeholder="Enter First Name"
            fieldName="firstName"
            handleBlur={handleBlur}
            onFocus={() => setActiveFormId('firstName')}
            activeFormId={activeFormId}
            setActiveFormId={setActiveFormId}
            handleChange={handleChange}
            value={values.firstName}
            error={errors.firstName}
            touched={touched.firstName}
          />

          {touched.firstName && errors.firstName && (
            <PText style={styles.errorText} textColor="error">
              {errors.firstName}
            </PText>
          )}

          <FormField
            fieldName="lastName"
            value={values.lastName}
            placeholder="Enter Last Name"
            handleBlur={handleBlur}
            onFocus={() => setActiveFormId('lastName')}
            activeFormId={activeFormId}
            setActiveFormId={setActiveFormId}
            handleChange={handleChange}
            error={errors.lastName}
            touched={touched.lastName}
          />

          {touched.lastName && errors.lastName && (
            <PText style={styles.errorText} textColor="error">
              {errors.lastName}
            </PText>
          )}

          <FormField
            fieldName="username"
            value={values.username}
            placeholder="Enter a Unique Username"
            handleBlur={handleBlur}
            onFocus={() => setActiveFormId('username')}
            activeFormId={activeFormId}
            setActiveFormId={setActiveFormId}
            handleChange={handleChange}
            error={errors.username}
            touched={touched.username}
          />

          {touched.username && errors.username && (
            <PText style={styles.errorText} textColor="error">
              {errors.username}
            </PText>
          )}

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
            fieldName="mobileNo"
            value={values.mobileNo}
            placeholder="Enter Mobile Number"
            handleBlur={handleBlur}
            onFocus={() => setActiveFormId('mobileNo')}
            activeFormId={activeFormId}
            setActiveFormId={setActiveFormId}
            handleChange={handleChange}
            error={errors.mobileNo}
            touched={touched.mobileNo}
          />

          {touched.mobileNo && errors.mobileNo && (
            <PText style={styles.errorText} textColor="error">
              {errors.mobileNo}
            </PText>
          )}

          <FormField
            fieldName="password"
            value={values.password}
            placeholder="Enter a Strong Password"
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
            Sign Up
          </Button>
        </Fragment>
      )}
    </Formik>
  );
};

export default SignUpFormik;

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
