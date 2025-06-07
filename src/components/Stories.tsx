import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Story from './Story';
import {stories} from '../data/stories';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';

const Stories = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <FlatList
        data={stories}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 12}}
        renderItem={({item}) => {
          return (
            <View style={{marginRight: 12, alignItems: 'center'}}>
              <Story
                image={item.image}
                name={item.name}
                isUser={item.isUser}
                onPress={() =>
                  navigation.navigate('StoryView', {
                    name: item.name,
                    image: item.image,
                  })
                }
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default Stories;
