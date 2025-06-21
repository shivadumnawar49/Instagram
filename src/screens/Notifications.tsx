import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from '../assets/icons/back.svg';
import {useNavigation} from '@react-navigation/native';

const Notifications = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginRight: 30}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <BackIcon />
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
            Notifications
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});

export default Notifications;
