import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../../../Firebase/firebase-config';
import Title from '@components/Text/PTitle';
import LoginFormik from '@components/TextInput/LoginFormik';
import CommonScrollView from '@components/Views/CommonScrollView';
import {useNavigation} from '@react-navigation/native';
import TextLink from '@components/Text/TextLink';
import AppDispatcher from '@redux/Dispatchers/AppDispatcher';

const {height} = Dimensions.get('window');

export default Login = props => {
  const {reset} = useNavigation();

  const navigateToSignup = () => {
    reset({
      index: 0,
      routes: [{name: 'Signup'}],
    });
  };

  const userLogin = values => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(res => {
        if (res.user.accessToken) {
          const user = auth.currentUser;
          const data = {
            tokens: user.accessToken,
            user: {
              name: user.displayName,
              email: user.email,
              uid: user.uid,
              photoURL: user.photoURL,
            },
          };
          console.log(res);
          AppDispatcher.setUserLoggedIn(data);
        }
      })
      .then(() => {});
  };

  return (
    <CommonScrollView overrideStyle={styles.commonScrollView}>
      {/* Heading */}
      <Title
        textAlign="center"
        style={styles.textHeading}
        bold={true}
        variant="h1"
        textColor="primary">
        Sign In
      </Title>

      {/* Login Form */}
      <View style={styles.formik}>
        <LoginFormik submitForm={userLogin} />
      </View>

      {/* Direct to login */}
      <TextLink
        normalLabel="Not an existing user?"
        linkLabel="Sign Up"
        onPress={navigateToSignup}
      />
    </CommonScrollView>
  );
};

const styles = StyleSheet.create({
  commonScrollView: {
    marginVertical: 0,
  },
  formik: {
    flex: 1,
    marginTop: height / 10,
  },
  textHeading: {
    marginTop: height / 10,
  },
});
