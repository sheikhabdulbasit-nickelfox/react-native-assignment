import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Dimensions,
  Pressable,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useTheme} from 'react-native-paper';

import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {height} = Dimensions.get('window');

const slides = [
  {
    key: 'one',
    title: 'Store Listing App',
    text: 'Now available on Android',
    icon: 'android',
  },
  {
    key: 'two',
    title: 'Map View',
    text: 'Visualise listings on a map',
    icon: 'map-marker-outline',
  },
  {
    key: 'three',
    title: 'Add New Listings',
    text: "Add new listings to your store's inventory",
    icon: 'plus-circle-outline',
  },
  {
    key: 'four',
    title: 'Chat',
    text: 'Chat with your customers',
    icon: 'message-text-outline',
  },
  {
    key: 'five',
    title: 'Get Notified',
    text: 'Stay on top of your game with real-time push notifications',
  },
];

const Intro = props => {
  const {colors} = useTheme();

  const goToSignUp = () => {
    props.navigation.navigate('Signup');
  };

  const Slide = ({item}) => {
    return (
      <View style={styles.slide}>
        <MCIcons name={item.icon} size={100} color={colors.surface} />
        <Text style={[styles.title, {color: colors.surface}]}>
          {item.title}
        </Text>
        <Text style={[styles.text, {color: colors.surface}]}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      style={[styles.container, {backgroundColor: colors.primary}]}
      data={slides}
      onDone={goToSignUp}
      showSkipButton={true}
      showNextButton={true}
      onSkip={goToSignUp}
      renderItem={props => <Slide {...props} />}
    />
  );
};

export default Intro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: height / 30,
  },
  text: {
    opacity: 0.8,
    marginTop: height / 50,
  },
  buttonLabel: {
    marginTop: 10,
    fontSize: 18,
  },
});
