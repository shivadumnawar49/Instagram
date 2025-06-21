import {View, Text, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/PostScreen';
import ReelsScreen from '../screens/ReelsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeDefaultIcon from '../assets/icons/home_default.svg';
import SearchDefaultIcon from '../assets/icons/search_default.svg';
import PostDefaultIcon from '../assets/icons/post_default.svg';
import ReelsDefaultIcon from '../assets/icons/reels_default.svg';
import ProfileDefaultIcon from '../assets/icons/profile_default.svg';
import HomeSelectedIcon from '../assets/icons/home_selected.svg';
import SearchSelectedIcon from '../assets/icons/search_selected.svg';
import PostSelectedIcon from '../assets/icons/post_selected.svg';
import ReelsSelectedIcon from '../assets/icons/reels_selected.svg';
import ProfileSelectedIcon from '../assets/icons/profile_selected.svg';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InstagramLogo from '../assets/icons/instagram_logo.svg';
import LikeDefaultIcon from '../assets/icons/like_default.svg';
import MessengerIcon from '../assets/icons/messenger.svg';
import HomeStackNavigator, {HomeStackParamList} from './HomeStackNavigator';
import {NavigatorScreenParams} from '@react-navigation/native';

export type TabStackParamList = {
  HomeTabs: NavigatorScreenParams<HomeStackParamList>;
  Search: undefined;
  Post: undefined;
  Reels: undefined;
  Profile: {
    userId: string;
    name: string;
    image: {uri: string};
    thumbnail?:{uri: string};
    bio: string;
  };
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTabs"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#000', borderColor: '#303030'},

        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="HomeTabs"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) =>
            focused ? <HomeSelectedIcon /> : <HomeDefaultIcon />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({focused}) =>
            focused ? <SearchSelectedIcon /> : <SearchDefaultIcon />,
        }}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={{
          title: 'Post',
          tabBarIcon: ({focused}) =>
            focused ? <PostSelectedIcon /> : <PostSelectedIcon />,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsScreen}
        options={{
          title: 'Reels',
          tabBarIcon: ({focused}) =>
            focused ? <ReelsSelectedIcon /> : <ReelsDefaultIcon />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{
          userId: '1',
          name: 'Shiva',
          image: {uri: 'https://insta-clone-14.s3.eu-north-1.amazonaws.com/assets/images/shiva.jpg'},
        }}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused}) =>
            focused ? (
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 32 / 2,
                  borderWidth: 4,
                  borderColor: '#fff',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={{uri: 'https://insta-clone-14.s3.eu-north-1.amazonaws.com/assets/images/shiva.jpg'}}
                  style={{width: 28, height: 28, borderRadius: 14}}
                />
              </View>
            ) : (
              <Image
                source={{uri: 'https://insta-clone-14.s3.eu-north-1.amazonaws.com/assets/images/shiva.jpg'}}
                style={{width: 28, height: 28, borderRadius: 14}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
