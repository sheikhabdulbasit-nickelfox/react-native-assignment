import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PText from '@components/Text/PText';
import Title from '@components/Text/PTitle';
import LoginFormik from '@components/TextInput/LoginFormik';
import CommonScrollView from '@components/Views/CommonScrollView';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from 'react-native-paper';
import TextLink from '@components/Text/TextLink';

const {height} = Dimensions.get('window');

export default Login = props => {
  const {colors} = useTheme();
  const {reset} = useNavigation();

  const navigateToSignup = () => {
    reset({
      index: 0,
      routes: [{name: 'Signup'}],
    });
  };

  return (
    <CommonScrollView overrideStyle={styles.commonScrollView}>
      {/* Heading */}
      <Title
        textAlign="center"
        style={{marginTop: 20}}
        bold={true}
        variant="h1"
        textColor="primary">
        Sign In
      </Title>

      {/* Login Form */}
      <View style={styles.formik}>
        <LoginFormik />
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
    marginTop: height / 15,
  },
  formik: {
    flex: 1,
    marginTop: height / 10,
  },
});
