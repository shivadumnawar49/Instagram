import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const MessengerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: '#fff'}}>messenger Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default MessengerScreen;
