import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {Card, Button, useTheme} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';

const ProfilePictureMenu = ({
  disableBackdrop,
  setDpImage,
  setBackdropEnabled,
}) => {
  const {colors} = useTheme();

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

  return (
    <Pressable
      onPress={disableBackdrop}
      style={[styles.backdrop, {backgroundColor: colors.disabled}]}>
      <Card style={styles.card}>
        <Card.Title title="Choose profile picture" style={styles.cardTitle} />
        <Card.Actions style={styles.cardActions}>
          <Button onPress={selectFromGallery}>Use Gallery</Button>
          <Button onPress={selectWithCamera}>Use Camera</Button>
        </Card.Actions>
      </Card>
    </Pressable>
  );
};

export default ProfilePictureMenu;

const styles = StyleSheet.create({
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
