import {View, Text, ImageSourcePropType} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import TabNavigator, {TabStackParamList} from './TabNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';
import MessengerScreen from '../screens/MessengerScreen';
import {HomeStackParamList} from './HomeStackNavigator';
import StoryViewScreen from '../screens/StoryViewScreen';
import AddToStory from '../screens/AddToStory';

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<TabStackParamList>;
  StoryView: {
    userId: string;
    name: string;
    image: {uri: string};
    storyImage: {uri: string};
    bio: string;
  };
  Messenger: undefined;
  AddToStory: undefined;
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="StoryView" component={StoryViewScreen} />
      <Stack.Screen name="Messenger" component={MessengerScreen} />
      <Stack.Screen name="AddToStory" component={AddToStory} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
