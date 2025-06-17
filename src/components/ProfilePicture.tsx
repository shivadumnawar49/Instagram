import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  source: ImageSourcePropType;
  size?: number;
  showRing: boolean;
  isUser?: boolean;
};

const ProfilePicture = ({
  source,
  size = 74,
  showRing = true,
  isUser,
}: Props) => {
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
  } else if (isUser) {
    return (
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity>
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
        </TouchableOpacity>
        <Text style={{color: '#fff', fontSize: 12, marginTop: 2}}>
          Your story
        </Text>
      </View>
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
