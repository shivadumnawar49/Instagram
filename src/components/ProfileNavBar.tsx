import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import BackIcon from '../assets/icons/back.svg';
import NotificationOffIcon from '../assets/icons/notifications_off.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

type Props = {
  name: string;
};

const ProfileNavBar = ({name}: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{marginRight: 32}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackIcon />
          </TouchableOpacity>
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
  );
};

export default ProfileNavBar;
