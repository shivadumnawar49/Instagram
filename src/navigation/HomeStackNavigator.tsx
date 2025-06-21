import {View, Text, ImageSourcePropType} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notifications from '../screens/Notifications';
import ProfilePage from '../screens/ProfilePage';
import HomeScreen from '../screens/HomeScreen';

export type HomeStackParamList = {
  Home: undefined;
  Notifications: undefined;
  ProfilePage: {
    userId: string;
    name: string;
    image: {uri: string};
    thumbnail?: {uri: string};
    bio: string;
  };
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Notifications" component={Notifications} />
      <HomeStack.Screen name="ProfilePage" component={ProfilePage} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
