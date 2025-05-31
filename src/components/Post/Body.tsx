import {View, Text, Image, Dimensions} from 'react-native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


type Props = {
  image: ImageSourcePropType;
};

const Body = ({image}: Props) => {
  return (
    <View style={{marginVertical:8}}>
      <Image source={image} style={{width:screenWidth, height:screenHeight*0.4}}/>
    </View>
  );
};

export default Body;
