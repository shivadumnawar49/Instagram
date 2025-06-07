import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Feed from '../components/Feed';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Feed />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default HomeScreen;
