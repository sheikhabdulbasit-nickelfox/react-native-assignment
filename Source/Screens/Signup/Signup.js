import React, {Fragment, useState, useRef} from 'react';
import {View, Pressable, StyleSheet, Dimensions, Image} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {useTheme} from 'react-native-paper';
import CommonScrollView from '../../Components/Views/CommonScrollView';
import Title from '../../Components/Text/PTitle';
import SignUpFormik from '@components/TextInput/SignUpFormik';

const {height} = Dimensions.get('window');

const SignUp = () => {
  const {colors} = useTheme();
  const [dpImage, setDpImage] = useState({state: false, uri: null});

  const [backdropEnabed, setBackdropEnabled] = useState(false);

  const submitForm = values => {
    console.log(values);
  };

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
            style={[styles.cameraIcon, {backgroundColor: colors.lightAsh}]}>
            <Ionicon name="md-camera-sharp" size={25} color={colors.surface} />
          </Pressable>
        </View>

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
