import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import InstagramLogo from '../assets/icons/instagram_logo.svg';
import LikeDefaultIcon from '../assets/icons/like_default.svg'
import MessengerIcon from '../assets/icons/messenger.svg';

const HomeHeader = () => {
  return (
    <View style={styles.header}>
      <InstagramLogo />
      <View style={{flexDirection:'row'}}>
        <LikeDefaultIcon style={{marginRight:24}}/>
        <MessengerIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {padding: 16, flexDirection:'row', justifyContent:'space-between'},
});

export default HomeHeader;
