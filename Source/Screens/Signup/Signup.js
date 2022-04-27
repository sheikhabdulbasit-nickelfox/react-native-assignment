import React, {Fragment, useState} from 'react';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../../../Firebase/firebase-config';
import CommonScrollView from '../../Components/Views/CommonScrollView';
import Title from '../../Components/Text/PTitle';
import SignUpFormik from '@components/TextInput/SignUpFormik';
import ProfilePictureContainer from '@components/Views/ProfilePictureContainer';
import AppDispatcher from '@redux/Dispatchers/AppDispatcher';
import ProfilePictureMenu from '@components/Views/ProfilePictureMenu';

const SignUp = () => {
  const [dpImage, setDpImage] = useState({state: false, uri: null});
  const [backdropEnabed, setBackdropEnabled] = useState(false);

  const showImagePicker = () => {
    setBackdropEnabled(true);
  };

  const registerUser = values => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(res => {
        if (res.user.accessToken) {
          updateProfile(auth.currentUser, {
            displayName: values.firstName + ' ' + values.lastName,
            photoURL: dpImage.uri,
            phoneNumber: values.mobileNo,
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
      <CommonScrollView>
        {/* Heading */}
        <Title
          textAlign="center"
          style={{marginTop: 20}}
          bold={true}
          variant="h3"
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
