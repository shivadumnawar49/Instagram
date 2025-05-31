import {View, Text} from 'react-native';
import React from 'react';
import LikeIcon from '../../assets/icons/like_default.svg';
import CommentIcon from '../../assets/icons/comment.svg';
import ShareIcon from '../../assets/icons/share.svg';
import SaveIcon from '../../assets/icons/save.svg';

const Footer = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 8,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
          <LikeIcon />
          <Text style={{color: '#fff', fontWeight: 'bold', marginLeft: 2}}>
            105K
          </Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginRight: 10}}>
          <CommentIcon />
          <Text style={{color: '#fff', fontWeight: 'bold', marginLeft: 2}}>
            275
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <ShareIcon />
          <Text style={{color: '#fff', fontWeight: 'bold', marginLeft: 2}}>
            150
          </Text>
        </View>
      </View>
      <SaveIcon />
    </View>
  );
};

export default Footer;
