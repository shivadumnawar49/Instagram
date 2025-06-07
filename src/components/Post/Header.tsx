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
        marginHorizontal: 8,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', }}>
        <View style={{marginRight:8}}>
          <ProfilePicture source={profilePicture} size={32} showRing={true}  />
        </View>
        <Text style={{color: '#fff',  fontWeight: 'bold'}}>
          {name}
        </Text>
      </View>
      <View>
        <Ionicons name="ellipsis-vertical" size={18} color="#fff" />
      </View>
    </View>
  );
};

export default Header;
