import React, {Fragment, useState} from 'react';
import {Pressable, StyleSheet, Dimensions} from 'react-native';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../../../Firebase/firebase-config';
import CommonScrollView from '../../Components/Views/CommonScrollView';
import Title from '../../Components/Text/PTitle';
import SignUpFormik from '@components/TextInput/SignUpFormik';
import ProfilePictureContainer from '@components/Views/ProfilePictureContainer';
import AppDispatcher from '@redux/Dispatchers/AppDispatcher';
import ProfilePictureMenu from '@components/Views/ProfilePictureMenu';
import PText from '@components/Text/PText';
import {useSelector} from 'react-redux';

const {height} = Dimensions.get('window');

const SignUp = props => {
  const [dpImage, setDpImage] = useState({state: false, uri: null});
  const [backdropEnabed, setBackdropEnabled] = useState(false);

  const showImagePicker = () => {
    setBackdropEnabled(true);
  };

  const navigateToLogin = () => {
    props.navigation.navigate('Login');
  };

  const registerUser = values => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(res => {
        if (res.user.accessToken) {
          updateProfile(auth.currentUser, {
            displayName: values.firstName + ' ' + values.lastName,
            photoURL: dpImage.uri,
          }).then(() => {
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
            AppDispatcher.setUserLoggedIn(data);
          });
        }
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const disableBackdrop = () => {
    setBackdropEnabled(false);
  };

  return (
    <Fragment>
      <CommonScrollView overrideStyle={styles.commonScrollView}>
        {/* Heading */}
        <Title
          textAlign="center"
          style={styles.textHeading}
          bold={true}
          variant="h1"
          textColor="primary">
          Create New Account
        </Title>

        {/* Profile Picture */}
        <ProfilePictureContainer
          dpImage={dpImage}
          showImagePicker={showImagePicker}
        />

        {/* Sign Up Form */}
        <SignUpFormik submitForm={registerUser} />

        <PText style={styles.pText} textAlign="center" variant="body2">
          Already a user?{'\n'}
          <Pressable onPress={navigateToLogin}>
            <PText variant="body1" textColor="secondary">
              Login
            </PText>
          </Pressable>
        </PText>

        {/* End of ScrollView */}
      </CommonScrollView>

      {/* Backdrop with profile picture menu */}
      {backdropEnabed && (
        <ProfilePictureMenu
          disableBackdrop={disableBackdrop}
          setDpImage={setDpImage}
          setBackdropEnabled={setBackdropEnabled}
        />
      )}
    </Fragment>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  commonScrollView: {
    marginVertical: 0,
  },

  textHeading: {
    marginTop: height / 10,
  },
  pText: {
    marginBottom: 20,
  },
});
