import {View, Text} from 'react-native';
import React from 'react';
import ProfilePicture from '../ProfilePicture';
import {ImageSourcePropType} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type Props = {
  profilePicture: ImageSourcePropType;
  name: string;
};

const Header = ({profilePicture, name}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        marginHorizontal: 16,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <ProfilePicture source={profilePicture} size={32} />
        <Text style={{color: '#fff', marginLeft: 8, fontWeight: 'bold'}}>
          {name}
        </Text>
      </View>
      <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
    </View>
  );
};

export default Header;
