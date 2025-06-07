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

export type TabStackParamList = {
  Home: undefined;
  Search: undefined;
  Post: undefined;
  Reels: undefined;
  Profile: {name: string; image: ImageSourcePropType};
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: '#000', borderColor: '#303030'},

        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
                  source={require('../assets/images/a1.png')}
                  style={{width: 28, height: 28, borderRadius: 14}}
                />
              </View>
            ) : (
              <Image
                source={require('../assets/images/a1.png')}
                style={{width: 28, height: 28, borderRadius: 14}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
