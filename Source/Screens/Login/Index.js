import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';

export default Login = props => {
  const {colors} = useTheme();
  const {reset} = useNavigation();

  const navigateToLogin = () => {
    reset({
      index: 0,
      routes: [{name: 'Signup'}],
    });
  };

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={navigateToLogin}
        style={[styles.button, {backgroundColor: colors.primary}]}
        android_ripple={{color: 'white', borderless: true}}>
        <Text style={[styles.buttonLabel]}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    elevation: 25,
  },
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBBBB',
    height: 40,
  },
  buttonLabel: {
    fontWeight: 'bold',
    color: 'white',
  },
});
