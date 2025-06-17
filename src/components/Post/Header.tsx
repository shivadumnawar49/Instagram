import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import ProfilePicture from '../ProfilePicture';
import {ImageSourcePropType} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator';
import {HomeStackParamList} from '../../navigation/HomeStackNavigator';
import {TabStackParamList} from '../../navigation/TabNavigator';

type Props = {
  userId: string;
  profilePicture: ImageSourcePropType;
  name: string;
  thumbnail?: ImageSourcePropType;
  bio: string;
};

type HeaderNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HomeStackParamList>,
  NativeStackNavigationProp<TabStackParamList>
>;

const Header = ({userId, profilePicture, name, thumbnail, bio}: Props) => {
  const navigation = useNavigation<HeaderNavigationProp>();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        marginHorizontal: 8,
      }}>
      <TouchableWithoutFeedback
        onPress={() =>
          navigation.navigate( userId ==='1'? 'Profile': 'ProfilePage', {
            userId: userId,
            name: name,
            image: profilePicture,
            thumbnail: thumbnail,
            bio: bio,
          })
        }>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
          }}>
          <View style={{marginRight: 8}}>
            <ProfilePicture source={profilePicture} size={32} showRing={true} />
          </View>
          <Text style={{color: '#fff', fontWeight: '500'}}>{name}</Text>
        </View>
      </TouchableWithoutFeedback>
      <View>
        <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
      </View>
    </View>
  );
};

export default Header;
