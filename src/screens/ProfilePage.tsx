import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React, {use, useState, useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabStackParamList} from '../navigation/TabNavigator';
import {RouteProp, useRoute} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddUserIcon from '../assets/icons/add_user.svg';
import GridDefaultIcon from '../assets/icons/grid_default.svg';
import GridSelectedIcon from '../assets/icons/grid_selected.svg';
import ReelsDefaultGreyIcon from '../assets/icons/reels_default_grey.svg';
import ReelsSelectedIcon from '../assets/icons/reels_selected.svg';
import TagsDefaultIcon from '../assets/icons/tags_default.svg';
import TagsSelectedIcon from '../assets/icons/tags_selected.svg';
import UserGrid from '../components/UserGrid';
import UserReels from '../components/UserReels';
import UserTags from '../components/UserTags';
import {posts} from '../data/post';
import {HomeStackParamList} from '../navigation/HomeStackNavigator';
import ProfileNavBar from '../components/ProfileNavBar';

interface ProfilePageScreenProps {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'ProfilePage'>;
}

type ProfilePageRouteProp = RouteProp<HomeStackParamList, 'ProfilePage'>;

type TabType = 'grid' | 'reels' | 'tags';

const ProfilePage = ({navigation}: ProfilePageScreenProps) => {
  const [isActiveTab, setIsActiveTab] = useState<TabType>('grid');
  const route = useRoute<ProfilePageRouteProp>();
  const {userId, name, image, thumbnail, bio} = route.params;
  console.log('user id profile page ', userId);
  const userPosts = useMemo(
    () => posts.filter(post => post.user.id === userId),
    [userId],
  );

  const imagePosts = useMemo(
    () => userPosts.filter(post => post.image),
    [userPosts],
  );

  const videoPosts = useMemo(
    () => userPosts.filter(post  => post.thumbnail),
    [userPosts],
  );

  const thumbnailsList = posts.filter(
    post => post.user.id === userId && post.thumbnail,
  );
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{padding: 12}}>
        <ProfileNavBar name={name} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 86,
              height: 86,
              borderRadius: 86 / 2,
              backgroundColor: '#333333',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 16,
            }}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 80 / 2,
                borderWidth: 3,
                borderColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={image}
                style={{width: 74, height: 74, borderRadius: 74 / 2}}
              />
            </View>
          </View>
          <View>
            <Text
              style={{
                color: '#fff',
                marginBottom: 6,
                fontSize: 16,
                fontWeight: 500,
              }}>
              {name}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{marginRight: 24}}>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: 500}}>
                  15
                </Text>
                <Text style={{color: '#fff'}}>posts</Text>
              </View>
              <View style={{marginRight: 24}}>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: 500}}>
                  475
                </Text>
                <Text style={{color: '#fff'}}>followers</Text>
              </View>
              <View>
                <Text style={{color: '#fff', fontSize: 18, fontWeight: 500}}>
                  328
                </Text>
                <Text style={{color: '#fff'}}>following</Text>
              </View>
            </View>
          </View>
        </View>
        <Text style={{color: '#fff', marginBottom: 8}}>{bio}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 32,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#404040',
              paddingVertical: 6,
              justifyContent: 'center',
              marginRight: 6,
              borderRadius: 8,
              flex: 1,
            }}>
            <Text style={{color: '#fff', fontWeight: 500, marginRight: 4}}>
              Following
            </Text>
            <Ionicons name="chevron-down" size={12} color={'#fff'} />
          </View>
          <View
            style={{
              backgroundColor: '#404040',
              paddingVertical: 6,
              marginRight: 6,
              borderRadius: 8,
              flex: 1,
              alignItems: 'center',
            }}>
            <Text style={{color: '#fff', fontWeight: 500, marginRight: 4}}>
              Message
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#404040',
              padding: 4,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AddUserIcon width={24} height={24} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginBottom: 16,
        }}>
        <TouchableWithoutFeedback onPress={() => setIsActiveTab('grid')}>
          <View
            style={{
              width: '33%',
              alignItems: 'center',
            }}>
            {isActiveTab === 'grid' ? (
              <GridSelectedIcon />
            ) : (
              <GridDefaultIcon />
            )}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setIsActiveTab('reels')}>
          <View
            style={{
              width: '33%',
              alignItems: 'center',
            }}>
            {isActiveTab === 'reels' ? (
              <ReelsSelectedIcon />
            ) : (
              <ReelsDefaultGreyIcon />
            )}
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setIsActiveTab('tags')}>
          <View
            style={{
              width: '33%',
              alignItems: 'center',
            }}>
            {isActiveTab === 'tags' ? (
              <TagsSelectedIcon />
            ) : (
              <TagsDefaultIcon />
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>

      {isActiveTab === 'grid' && <UserGrid data={imagePosts} />}
      {isActiveTab === 'reels' && <UserReels data={videoPosts} />}
      {/* {isActiveTab === 'tags' && <UserTags data={userPosts} />} */}
    </SafeAreaView>
  );
};

export default ProfilePage;
