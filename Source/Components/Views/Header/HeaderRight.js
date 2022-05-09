import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HeaderRight = ({secondIconState = false, firstIcon, secondIcon}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.headerEnd}>
      <MatComIcons
        name={firstIcon}
        color={colors.primary}
        size={30}
        style={styles.icon}
      />
      {secondIconState && (
        <MatComIcons
          name={secondIcon}
          color={colors.primary}
          size={30}
          style={styles.icon}
        />
      )}
    </View>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  headerEnd: {
    flexDirection: 'row',
    marginRight: 10,
  },
  icon: {
    marginLeft: 10,
  },
});
