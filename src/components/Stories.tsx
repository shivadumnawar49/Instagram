import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Story from './Story';
import {stories} from '../data/stories';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import {HomeStackParamList} from '../navigation/HomeStackNavigator';
import ProfilePicture from './ProfilePicture';

const Stories = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <FlatList
        data={stories}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={5}
        removeClippedSubviews={true}
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
                onPress={() =>
                  navigation.navigate('StoryView', {
                    userId: item.userId,
                    name: item.name,
                    image: item.image,
                    storyImage: item.storyImage,
                    bio: item.bio,
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
