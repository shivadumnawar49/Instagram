import {
  View,
  Text,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  useWindowDimensions,
  Alert,
} from 'react-native';
import React from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/AppNavigator';
import {useRoute, RouteProp} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LikeDefaultIcon from '../assets/icons/like_default.svg';
import ShareDefaultIcon from '../assets/icons/share.svg';
import ProfilePage from './ProfilePage';
import {Screen} from 'react-native-screens';

interface StoryViewProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'StoryView'>;
}

type StoryViewRouteProp = RouteProp<RootStackParamList, 'StoryView'>;

const StoryViewScreen = ({navigation}: StoryViewProps) => {
  const {width, height} = useWindowDimensions();

  const route = useRoute<StoryViewRouteProp>();
  const {userId, name, image, storyImage, bio} = route.params;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <View>
        <Image
          source={storyImage}
          style={{
            width: width,
            height: height * 0.9,

            marginTop: 8,
            borderRadius: 8,
          }}
          resizeMode="cover"
        />
        <View
          style={{
            position: 'absolute',
            top: 12,
            left: 0,
            right: 0,
            flexDirection: 'row',
            padding: 12,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('MainTabs', {
                screen: 'HomeTabs',
                params: {
                  screen: 'ProfilePage',
                  params: {name: name, userId: userId, image: image, bio: bio},
                },
              })
            }>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flex: 1,
              }}>
              <Image
                source={image}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 36 / 2,
                  marginRight: 12,
                }}
              />
              <Text style={{fontWeight: 500, color: '#fff', marginRight: 8}}>
                {name}
              </Text>
              <Text style={{color: '#D3D3D3'}}>12h</Text>
            </View>
          </TouchableWithoutFeedback>
          <View>
            <Ionicons name="ellipsis-vertical" size={18} color={'#fff'} />
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 8,
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: '#909090',
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderRadius: 999,
              marginTop: 8,
              flex: 1,
            }}>
            <TextInput
              placeholder="Send message"
              placeholderTextColor={'#fff'}
              style={{color: '#fff'}}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginHorizontal: 16}}>
              <LikeDefaultIcon />
            </View>
            <View style={{marginRight: 8}}>
              <ShareDefaultIcon />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StoryViewScreen;