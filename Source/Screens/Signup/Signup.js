import React, {Fragment, useState} from 'react';
import {Pressable, StyleSheet, Dimensions} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import {Card, useTheme, Button} from 'react-native-paper';
import CommonScrollView from '../../Components/Views/CommonScrollView';
import Title from '../../Components/Text/PTitle';
import SignUpFormik from '@components/TextInput/SignUpFormik';
import ProfilePictureContainer from '@components/Views/ProfilePictureContainer';

const {height} = Dimensions.get('window');

const SignUp = () => {
  const {colors} = useTheme();
  const [dpImage, setDpImage] = useState({state: false, uri: null});
  const [backdropEnabed, setBackdropEnabled] = useState(false);

  const showImagePicker = () => {
    setBackdropEnabled(true);
  };

  const submitForm = values => {
    console.log(values);
  };

  const selectFromGallery = () => {
    setBackdropEnabled(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setDpImage({state: true, uri: image.path});
    });
  };

  const selectWithCamera = () => {
    setBackdropEnabled(false);
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setDpImage({state: true, uri: image.path});
    });
  };

  const disableBackdrop = () => {
    setBackdropEnabled(false);
  };

  return (
    <Fragment>
      {backdropEnabed && (
        <Pressable
          onPress={disableBackdrop}
          style={[styles.backdrop, {backgroundColor: colors.disabled}]}>
          <Card style={styles.card}>
            <Card.Title
              title="Choose profile picture"
              style={styles.cardTitle}
            />
            <Card.Actions style={styles.cardActions}>
              <Button onPress={selectFromGallery}>Use Gallery</Button>
              <Button onPress={selectWithCamera}>Use Camera</Button>
            </Card.Actions>
          </Card>
        </Pressable>
      )}

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
        <SignUpFormik submitForm={submitForm} />
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
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  card: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 11,
    alignItems: 'flex-end',
  },
  cardTitle: {
    alignSelf: 'flex-start',
  },
  cardActions: {
    alignSelf: 'flex-end',
  },
});
