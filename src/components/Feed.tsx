import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Post from './Post';
import Stories from './Stories';
import InstagramLogo from '../assets/icons/instagram_logo.svg';
import LikeDefaultIcon from '../assets/icons/like_default.svg';
import MessengerIcon from '../assets/icons/messenger.svg';
import {posts} from '../data/post';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import HomeStackNavigator, {
  HomeStackParamList,
} from '../navigation/HomeStackNavigator';
import {TabStackParamList} from '../navigation/TabNavigator';
import ProfilePicture from './ProfilePicture';

const viewabilityConfig = {itemVisiblePercentThreshold: 80};

type FeedNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  NativeStackNavigationProp<HomeStackParamList>
>;

const Feed = () => {
  const navigation = useNavigation<FeedNavigationProp>();
  const [activeId, setActiveId] = useState<string | null>(null);

  const CHUNK_SIZE = 5;
  const [displayedPosts, setDisplayedPosts] = useState(
    posts.slice(0, CHUNK_SIZE),
  );
  const [page, setPage] = useState(1);

  const loadMorePosts = () => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * CHUNK_SIZE;
    const end = start + CHUNK_SIZE;

    const nextChunk = posts.slice(start, end);
    if (nextChunk.length > 0) {
      setDisplayedPosts(prev => [...prev, ...nextChunk]);
      setPage(nextPage);
    }
  };

  const onViewableItemsChanged = useRef(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveId(viewableItems[0].item.id);
    }
  }).current;

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
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Notifications')}>
              <LikeDefaultIcon style={{marginRight: 24}} />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate('Messenger')}>
              <MessengerIcon />
            </TouchableWithoutFeedback>
          </View>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProfilePicture
            source={require('../assets/images/shiva.jpg')}
            showRing={false}
            isUser={true}
          />
          <Stories />
        </ScrollView>
      </View>
    );
  };

  return (
    <FlatList
      data={displayedPosts}
      keyExtractor={item => item.id}
      initialNumToRender={CHUNK_SIZE}
      maxToRenderPerBatch={CHUNK_SIZE}
      windowSize={5}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={Header}
      contentContainerStyle={{paddingBottom: 30}}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      onEndReached={loadMorePosts}
      onEndReachedThreshold={0.5}
      renderItem={({item}) => {
        return <Post post={item} isPlaying={item.id === activeId} />;
      }}
    />
  );
};

export default Feed;
