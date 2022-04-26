import React, {Fragment, useState, useRef} from 'react';
import {View, Pressable, StyleSheet, Dimensions, Image} from 'react-native';
import {Formik} from 'formik';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {useTheme} from 'react-native-paper';
import CommonScrollView from '../../Components/Views/CommonScrollView';
import Title from '../../Components/Text/PTitle';
import {
  SignupInitialValues,
  SignupValidationModel,
} from '@models/SignUpValidationModel';
import FormField from '@components/TextInput/FormField';

const {height} = Dimensions.get('window');

const SignUp = () => {
  const {colors, fonts} = useTheme();
  const [dpImage, setDpImage] = useState({state: false, uri: null});
  const [activeFormId, setActiveFormId] = useState('');
  const [backdropEnabed, setBackdropEnabled] = useState(false);

  console.log(activeFormId);
  return (
    <Fragment>
      {backdropEnabed && (
        <View
          style={[styles.backdrop, {backgroundColor: colors.disabled}]}></View>
      )}

      <CommonScrollView>
        {/* Heading and Profile Picture */}
        <Title
          textAlign="center"
          style={{marginTop: 20}}
          bold={true}
          variant="h3"
          textColor="primary">
          Create New Account
        </Title>

        <View style={styles.imageContainer}>
          <Image
            source={
              !dpImage.state
                ? require('../../Resources/Images/dp.png')
                : {uri: dpImage.uri}
            }
            style={[styles.profileImage, {backgroundColor: colors.primary}]}
          />
          <Pressable
            android_ripple={{color: colors.surface, borderless: false}}
            style={[styles.cameraIcon, {backgroundColor: colors.accent}]}>
            <Ionicon name="md-camera-sharp" size={25} color={colors.surface} />
          </Pressable>
        </View>

        {/* Sign Up Form */}
        <Formik
          initialValues={SignupInitialValues}
          validationSchema={SignupValidationModel}
          validateOnMount
          onSubmit={values => console.log(values)}>
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
                fieldName="firstName"
                handleChange={() => handleChange('firstName')}
                value={values.firstName}
                handleBlur={() => handleBlur('firstName')}
                placeholder="Enter First Name"
                onFocus={() => setActiveFormId('firstName')}
                activeFormId={activeFormId}
              />

              <FormField
                fieldName="lastName"
                handleChange={() => handleChange('lastName')}
                value={values.lastName}
                handleBlur={() => handleBlur('lastName')}
                placeholder="Enter Last Name"
                onFocus={() => setActiveFormId('lastName')}
                activeFormId={activeFormId}
              />

              <FormField
                fieldName="username"
                handleChange={() => handleChange('username')}
                value={values.username}
                handleBlur={() => handleBlur('username')}
                placeholder="Enter Unique Username"
                onFocus={() => setActiveFormId('username')}
                activeFormId={activeFormId}
              />

              <FormField
                fieldName="email"
                keyboardType="email-address"
                placeholder="Enter Email"
                value={values.email}
                handleChange={() => handleChange('email')}
                handleBlur={() => handleBlur('email')}
                onFocus={() => setActiveFormId('email')}
                activeFormId={activeFormId}
              />

              <FormField
                fieldName="password"
                handleChange={() => handleChange('password')}
                value={values.password}
                handleBlur={() => handleBlur('password')}
                placeholder="Enter a strong password"
                onFocus={() => setActiveFormId('password')}
                activeFormId={activeFormId}
              />
            </Fragment>
          )}
        </Formik>
      </CommonScrollView>
    </Fragment>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  heading: {
    marginTop: height * 0.05,
    fontSize: 28,
    textAlign: 'center',
  },
  imageContainer: {
    alignSelf: 'center',
  },
  profileImage: {
    margin: 30,
    alignSelf: 'center',
    height: height * 0.2,
    width: height * 0.2,
    borderRadius: 100,
  },
  cameraIcon: {
    padding: 5,
    borderRadius: 100,
    position: 'absolute',
    right: 35,
    bottom: 33,
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
});
