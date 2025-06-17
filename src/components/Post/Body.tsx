import {View, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ImageSourcePropType} from 'react-native';
import Video from 'react-native-video';
import {useIsFocused} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

type Props = {
  image?: ImageSourcePropType;
  video?: number | string;
  thumnail?: ImageSourcePropType;
  isPlaying: boolean;
};

const Body = ({image, video, isPlaying}: Props) => {
  const isFocus = useIsFocused();

  const [imageHeight, setImageHeight] = useState<number>(screenWidth*0.6);

  useEffect(() => {
    if(image){
      const source = Image.resolveAssetSource(image);
      const ratio = source.height / source.width;
      setImageHeight(screenWidth * ratio);
    }
  }, [image])

  if (image) {
    return (
      <View style={{marginVertical: 8}}>
        <Image
          source={image}
          style={{width: screenWidth, height: imageHeight}}
        />
      </View>
    );
  } else if (video != undefined) {
    const shouldPlay = isPlaying && isFocus;
    const videoSource = typeof video === 'string' ? {uri:video} : video;
    return (
      <View style={{marginVertical: 8}}>
        <Video
          source={videoSource as unknown as any}
          paused={!shouldPlay}
          repeat={true}
          style={{width: screenWidth, height: screenHeight * 0.4}}
          resizeMode="cover"
        />
      </View>
    );
  } else {
    return null;
  }
};

export default Body;
