import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProfilePicture from './ProfilePicture';
import LinearGradient from 'react-native-linear-gradient';
import {ImageSourcePropType} from 'react-native';

type Props = {
  image: ImageSourcePropType;
  name: string;
};

const Story = ({image, name}: Props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <LinearGradient
        colors={['#f9ce34', '#ee2a7b', '#6228d7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          width: 86,
          height: 86,
          borderRadius: 43,
          alignItems: 'center',
          marginHorizontal: 6,
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            borderWidth: 3,
            borderColor: '#000',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ProfilePicture source={image} />
        </View>
      </LinearGradient>
      <Text style={{color: '#fff', fontSize: 12, marginTop: 2}}>{name}</Text>
    </View>
  );
};

export default Story;
