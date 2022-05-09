import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import IntroScreenDispatcher from '../../../Redux/Dispatchers/IntroScreenDispatcher';

export default Splash = () => {
  const {reset} = useNavigation();
  const {isLogged} = useSelector(store => store.app);
  const {loadedFirstTime} = useSelector(store => store.intro);

  React.useEffect(() => {
    checkForUserSession();
  }, []);

  const checkForUserSession = () => {
    if (isLogged) {
      reset({
        index: 0,
        routes: [{name: 'TabNavigator'}],
      });
    }
    if (loadedFirstTime) {
      IntroScreenDispatcher.setFirstLoadFlagToFalse();
      reset({
        index: 0,
        routes: [{name: 'Intro'}],
      });
    }
    if (!isLogged && !loadedFirstTime) {
      reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }
  };

  return <View></View>;
};
