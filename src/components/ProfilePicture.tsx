import {View, Text, Image} from 'react-native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';

type Props = {
  source: ImageSourcePropType;
  size?: number;
};

const ProfilePicture = ({source, size = 74}: Props) => {
  return (
    <Image
      source={source}
      style={{
        width: size,
        height: size,
        borderRadius: size/2,
      }}
    />
  );
};

export default ProfilePicture;
