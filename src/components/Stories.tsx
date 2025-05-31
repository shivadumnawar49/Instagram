import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Story from './Story';

const storiesData = [
  {name: 'watson', source: require('../assets/images/a1.png')},
  {name: 'emily', source: require('../assets/images/a2.png')},
  {name: 'ariana', source: require('../assets/images/a3.png')},
  {name: 'cara', source: require('../assets/images/a4.png')},
  {name: 'kendall', source: require('../assets/images/a5.png')},
  {name: 'tyson', source: require('../assets/images/a6.png')},
  {name: 'jon', source: require('../assets/images/a7.png')},
  {name: 'david', source: require('../assets/images/a8.png')},
];

const Stories = () => {
  return (
    <View>
      <FlatList
        data={storiesData}
        keyExtractor={item => item.source}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return <Story image={item.source} name={item.name} />;
        }}
      />
    </View>
  );
};

export default Stories;
