import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
      <Text style={{color: '#fff'}}>SearchScreen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;
