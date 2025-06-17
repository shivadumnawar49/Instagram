import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from '../assets/icons/back.svg';

const Notifications = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginRight: 30}}>
            <BackIcon />
          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            Notifications
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
