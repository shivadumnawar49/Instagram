import {
  View,
  Text,
  FlatList,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import SelectedReelsIcon from '../assets/icons/reels_selected.svg';

import {posts} from '../data/post';


const UserReels = ({data}: any) => {
  const {width} = useWindowDimensions();

  console.log('thumbnails data', data);
  const thumbnailWidth = width/3;
  const thumbnailHeight = thumbnailWidth* 16/9;

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      contentContainerStyle={{gap: 2, paddingBottom: 30}}
      columnWrapperStyle={{gap: 2}}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => {
        return (
          <Image
            source={item.thumbnail}
            style={{width: thumbnailWidth, height: thumbnailHeight}}
            resizeMode="cover"
          />
        );
      }}
    />
  );
};

export default UserReels;
