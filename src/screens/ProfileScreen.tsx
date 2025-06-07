import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from '../assets/icons/back.svg';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabStackParamList} from '../navigation/TabNavigator';
import {RouteProp, useRoute} from '@react-navigation/native';
import NotificationOffIcon from '../assets/icons/notifications_off.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AddUserIcon from '../assets/icons/add_user.svg';
import GridDefaultIcon from '../assets/icons/grid_default.svg';
import GridSelectedIcon from '../assets/icons/grid_selected.svg';
import ReelsDefaultGreyIcon from '../assets/icons/reels_default_grey.svg';
import ReelsSelectedIcon from '../assets/icons/reels_selected.svg';

interface ProfileScreenProps {
  navigation: NativeStackNavigationProp<TabStackParamList, 'Profile'>;
}

type ProfileRouteProp = RouteProp<TabStackParamList, 'Profile'>;

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const [isSelected, setIsSelected] = useState(false);
  const route = useRoute<ProfileRouteProp>();
  const {name, image} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{padding: 12}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginRight: 32}}>
              <BackIcon />
            </View>
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {name}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginRight: 32}}>
              <NotificationOffIcon />
            </View>
            <Ionicons name="ellipsis-vertical" size={18} color={'#fff'} />
          </View>
        </View>
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
              Shanker
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
        <Text style={{color: '#fff', marginBottom: 8}}>You can do it.</Text>
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
        <View>
          {isSelected ? (
            <TouchableWithoutFeedback
              onPress={() => setIsSelected(!isSelected)}>
              <GridSelectedIcon width={32} height={32} />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => setIsSelected(!isSelected)}>
              <GridDefaultIcon width={32} height={32} />
            </TouchableWithoutFeedback>
          )}
        </View>

        <View>
          {isSelected ? (
            <TouchableWithoutFeedback
              onPress={() => setIsSelected(!isSelected)}>
              <ReelsSelectedIcon width={32} height={32} />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              onPress={() => setIsSelected(!isSelected)}>
              <ReelsDefaultGreyIcon width={32} height={32} />
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
