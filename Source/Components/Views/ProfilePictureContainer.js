import React from 'react';
import {View, StyleSheet, Image, Pressable, Dimensions} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';

const {height} = Dimensions.get('window');

const ProfilePictureContainer = ({dpImage, showImagePicker}) => {
  const {colors} = useTheme();
  return (
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
        onPress={showImagePicker}
        style={[styles.cameraIcon, {backgroundColor: colors.backdrop}]}>
        <Ionicon name="md-camera-sharp" size={25} color={colors.primary} />
      </Pressable>
    </View>
  );
};

export default ProfilePictureContainer;

const styles = StyleSheet.create({
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
