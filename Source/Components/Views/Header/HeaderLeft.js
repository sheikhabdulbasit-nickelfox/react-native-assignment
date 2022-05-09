import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, useTheme} from 'react-native-paper';
import {useSelector} from 'react-redux';

const HeaderLeft = ({backLabel = '', avatar = false, icon = false}) => {
  const {photoURL} = useSelector(state => state.app.user);
  const {colors} = useTheme();

  return (
    <View style={styles.header}>
      {avatar && (
        <Avatar.Image
          size={35}
          source={
            !!photoURL
              ? {uri: photoURL}
              : require('../../../Resources/Images/dp.png')
          }
        />
      )}
      <Text style={[styles.headerText, {color: colors.primary}]}>
        {backLabel}
      </Text>
    </View>
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 10,
  },
  headerText: {
    alignSelf: 'center',
    marginLeft: 10,
    fontSize: 16,
  },
});
