import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {posts} from '../data/post';

const UserTags = ({data}: any) => {
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
            source={item.image}
            style={{flex: 1 / 3, aspectRatio: 3 / 4}}
            resizeMode="cover"
          />
        );
      }}
    />
  );
};

export default UserTags;
