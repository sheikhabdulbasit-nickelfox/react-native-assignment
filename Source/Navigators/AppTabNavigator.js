import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MatComIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/UserDashboard/Home';

const Tab = createBottomTabNavigator();

export function AppTabNavigator() {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: colors.background,
      }}
      labeled={false}
      screenOptions={({route}) => ({
        headerTitleAlign: 'center',
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTitleStyle: {
          alignSelf: 'center',
          color: colors.black,
          fontWeight: '400',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'ios-home-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Categories') {
            iconName = 'sort-variant';
            return <MatComIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Search') {
            iconName = focused ? 'cart' : 'ios-cart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
