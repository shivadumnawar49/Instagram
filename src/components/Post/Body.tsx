import {View, Image, Dimensions, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import Video from 'react-native-video';
import {useIsFocused} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

type Props = {
  image?: {uri:string};
  video?: {uri:string};
  thumbnail?: {uri:string};
  isPlaying: boolean;
};

const Body = ({image, video, isPlaying}: Props) => {
  const isFocused = useIsFocused();

  const [imageHeight, setImageHeight] = useState<number>(screenWidth * 0.6);

  useEffect(() => {
    if (image?.uri) {
      Image.getSize(
        image.uri,
        (width, height) => {
          const ratio = height / width;
          const calculatedHeight = ratio * screenWidth;
          setImageHeight(calculatedHeight);
        },
        error => {
          console.warn('Failed to get image size', error);
        },
      );
    }
  }, [image?.uri]);

  if (image) {
    return (
      <View style={{marginVertical: 8}}>
        <Image
          source={image}
          style={{width: screenWidth, height: imageHeight}}
          
        />
      </View>
    );
  } else if (video?.uri) {
    const shouldPlay = isPlaying && isFocused;
    const videoSource = typeof video === 'string' ? {uri: video} : video;
    return (
      <View style={{marginVertical: 8}}>
        <Video
          source={videoSource}
          paused={!shouldPlay}
          repeat={true}
          style={{width: screenWidth, height: screenHeight * 0.4}}
          resizeMode="cover"
        />
        <Text>hello</Text>
      </View>
    );
  } else {
    return null;
  }
};

export default Body;
