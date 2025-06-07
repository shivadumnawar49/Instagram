import {View, Text, Image} from 'react-native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  source: ImageSourcePropType;
  size?: number;
  showRing: boolean;
};

const ProfilePicture = ({source, size = 74, showRing = true}: Props) => {
  const image = (
    <View
      style={{
        width: size + 6,
        height: size + 6,
        borderRadius: (size + 6) / 2,
        borderWidth: 3,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
    </View>
  );
  if (showRing) {
    return (
      <LinearGradient
        colors={['#f9ce34', '#ee2a7b', '#6228d7']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={{
          width: size + 12,
          height: size + 12,
          borderRadius: (size + 12) / 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {image}
      </LinearGradient>
    );
  }
  return (
    <View
      style={{
        width: size + 12,
        height: size + 12,
        borderRadius: (size + 12) / 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={source}
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
        }}
      />
    </View>
  );
};

export default ProfilePicture;
