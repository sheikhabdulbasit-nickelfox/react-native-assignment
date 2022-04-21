import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import {useTheme} from 'react-native-paper';
import CommonScrollView from '../../Components/Views/CommonScrollView';

const {height, width} = Dimensions.get('window');

const SignUp = () => {
  const {colors, fonts} = useTheme();
  const [dpImage, setDpImage] = useState({state: false, uri: null});

  return (
    <CommonScrollView>
      <Text style={[styles.heading, {fontFamily: fonts.regular.fontFamily}]}>
        Create New Account
      </Text>
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
          style={[styles.cameraIcon, {backgroundColor: colors.accent}]}>
          <Ionicon name="md-camera-sharp" size={25} color={colors.surface} />
        </Pressable>
      </View>
    </CommonScrollView>
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
});
