import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const MessengerScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <Text style={{color: '#fff'}}>messenger Screen</Text>
    </SafeAreaView>
  );
};

export default MessengerScreen;
