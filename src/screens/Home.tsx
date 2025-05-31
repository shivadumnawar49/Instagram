import {View, Text, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import HomeHeader from '../components/HomeHeader';
import Stories from '../components/Stories';
import Post from '../components/Post';

const post = {
  user: {
    image: require('../assets/images/a7.png'),
    name: 'rock',
  },
  image: require('../assets/images/cat.jpg'),
};

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <HomeHeader />
      <Stories />
      <Post post={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default Home;
