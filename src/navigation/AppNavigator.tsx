import {View, Text, ImageSourcePropType} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import TabNavigator, { TabStackParamList } from './TabNavigator';
import StoryViewScreen from '../screens/StoryViewScreen';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<TabStackParamList>;
  StoryView: {name: string; image: ImageSourcePropType};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="MainTabs"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen name="StoryView" component={StoryViewScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
