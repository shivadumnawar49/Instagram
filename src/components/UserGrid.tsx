import {View, Text, FlatList, Image, useWindowDimensions} from 'react-native';
import React from 'react';

const UserGrid = ({data}: any) => {
  const {width} = useWindowDimensions();
  const w = width / 3;
  const h = w * (4 / 3);
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
            style={{width: w, height: h}}
            resizeMode="cover"
          />
        );
      }}
    />
  );
};

export default UserGrid;
