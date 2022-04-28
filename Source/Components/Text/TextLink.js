import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import PText from './PText';

const TextLink = ({normalLabel = '', linkLabel = '', onPress}) => {
  return (
    <PText style={styles.pText} textAlign="center" variant="body2">
      {normalLabel}
      {'\n'}
      <Pressable onPress={onPress}>
        <PText variant="body1" textColor="secondary">
          {linkLabel}
        </PText>
      </Pressable>
    </PText>
  );
};

export default TextLink;

const styles = StyleSheet.create({
  pText: {
    marginBottom: 20,
  },
});
