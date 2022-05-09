import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import HeaderLeft from '../../Components/Views/Header/HeaderLeft';
import HeaderRight from '@components/Views/Header/HeaderRight';

const Home = () => {
  const navigation = useNavigation();
  const {colors} = useTheme();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home',
      headerLeft: () => {
        return <HeaderLeft avatar={true} />;
      },
      headerRight: () => {
        return (
          <HeaderRight
            firstIcon="file-document-edit"
            secondIconState={true}
            secondIcon="map-outline"
          />
        );
      },
    });
  }, []);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
