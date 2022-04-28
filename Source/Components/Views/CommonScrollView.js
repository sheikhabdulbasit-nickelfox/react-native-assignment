import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const CommonScrollView = ({overrideStyle, children}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[styles.parent, overrideStyle]}>
      {children}
    </ScrollView>
  );
};

export default CommonScrollView;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    margin: 10,
    paddingBottom: 20,
  },
});
