import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
SafeAreaView;
const PostScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <Text style={{color: '#fff'}}>Post screen</Text>
    </SafeAreaView>
  );
};

export default PostScreen;
