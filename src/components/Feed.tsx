import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
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
import {PostType} from './Post';
import throttle from 'lodash/throttle';

const viewabilityConfig = {itemVisiblePercentThreshold: 80};

type FeedNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  NativeStackNavigationProp<HomeStackParamList>
>;

const CHUNK_SIZE = 5;

const Feed = () => {
  const navigation = useNavigation<FeedNavigationProp>();
  const [activeId, setActiveId] = useState<string | null>(null);

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

  const onViewableItemsChanged = useRef(
    throttle(({viewableItems}) => {
      if (viewableItems.length > 0) {
        setActiveId(viewableItems[0].item.id);
      }
    }, 500),
  ).current;

  const Header = useMemo(() => {
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
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}>
              <LikeDefaultIcon style={{marginRight: 24}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Messenger')}>
              <MessengerIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProfilePicture
              source={{
                uri: 'https://insta-clone-14.s3.eu-north-1.amazonaws.com/assets/images/shiva.jpg',
              }}
              showRing={false}
              isUser={true}
            />
            <Stories />
          </ScrollView>
        </View>
      </View>
    );
  }, []);

  const renderItem = useCallback(
    ({item}: {item: PostType}) => {
      return <Post post={item} isPlaying={item.id === activeId} />;
    },
    [activeId],
  );

  return (
    <FlatList
      data={displayedPosts}
      keyExtractor={item => item.id}
      initialNumToRender={10}
      maxToRenderPerBatch={10}
      windowSize={10}
      removeClippedSubviews={false}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={Header}
      contentContainerStyle={{paddingBottom: 30}}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      onEndReached={loadMorePosts}
      onEndReachedThreshold={0.5}
      renderItem={renderItem}
    />
  );
};

export default Feed;
