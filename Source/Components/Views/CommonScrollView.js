import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

const CommonScrollView = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.parent}>
      {props.children}
    </ScrollView>
  );
};

export default CommonScrollView;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    margin: 10,
  },
});
