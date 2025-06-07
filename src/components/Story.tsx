import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import ProfilePicture from './ProfilePicture';
import {ImageSourcePropType} from 'react-native';

type Props = {
  image: ImageSourcePropType;
  name: string;
  isUser?: boolean;
  onPress: () => void;
};

const Story = ({image, name, isUser = false, onPress}: Props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={onPress}>
        <ProfilePicture source={image} showRing={!isUser} />
      </TouchableOpacity>
      <Text style={{color: '#fff', fontSize: 12, marginTop: 2}}>{name}</Text>
    </View>
  );
};

export default Story;
