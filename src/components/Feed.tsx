import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Post from './Post';
import Stories from './Stories';
import InstagramLogo from '../assets/icons/instagram_logo.svg';
import LikeDefaultIcon from '../assets/icons/like_default.svg';
import MessengerIcon from '../assets/icons/messenger.svg';
import {posts} from '../data/post';

const Feed = () => {
  const Header = () => {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#000',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 56,
            alignItems: 'center',
            paddingHorizontal: 12,
          }}>
          <View>
            <InstagramLogo />
          </View>
          <View style={{flexDirection: 'row'}}>
            <LikeDefaultIcon style={{marginRight: 24}} />
            <MessengerIcon />
          </View>
        </View>
        <Stories />
      </View>
    );
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={Header}
      contentContainerStyle={{paddingBottom: 30}}
      renderItem={({item}) => {
        return <Post post={item} />;
      }}
    />
  );
};

export default Feed;
