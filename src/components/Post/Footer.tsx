import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LikeDefaultIcon from '../../assets/icons/like_default.svg';
import LikeActiveIcon from '../../assets/icons/like_active.svg';
import CommentIcon from '../../assets/icons/comment.svg';
import ShareIcon from '../../assets/icons/share.svg';
import SaveDefaultIcon from '../../assets/icons/save_default.svg';
import SaveActiveIcon from '../../assets/icons/save_active.svg';

const screenWidth = Dimensions.get('window').width;

type Props = {
  name: string;
  caption: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  postedAt: string;
};

const Footer = ({
  name,
  caption,
  likesCount: initialLikesCount,
  commentsCount,
  sharesCount,
  postedAt,
}: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [isSaved, setIsSaved] = useState(false);
  const [isMoreShown, setIsMoreShown] = useState(false);
  const maxChars = Math.floor(screenWidth / 7);
  const shouldTruncate = caption.length + name.length > maxChars;
  const displayCaption =
    !isMoreShown && shouldTruncate
      ? caption.slice(0, maxChars - name.length - 10)
      : caption;

  const onLikePressed = () => {
    const newLiked = !isLiked;
    setIsLiked(newLiked);
    setLikesCount(prev => prev + (newLiked ? 1 : -1));
  };

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 8,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <TouchableWithoutFeedback onPress={() => onLikePressed()}>
              {isLiked ? <LikeActiveIcon /> : <LikeDefaultIcon />}
            </TouchableWithoutFeedback>
            <Text style={{color: '#fff', fontWeight: 'bold', marginLeft: 2}}>
              {likesCount}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <CommentIcon />
            <Text style={{color: '#fff', fontWeight: 'bold', marginLeft: 2}}>
              {commentsCount}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <ShareIcon />
            <Text style={{color: '#fff', fontWeight: 'bold', marginLeft: 2}}>
              {sharesCount}
            </Text>
          </View>
        </View>
        <View>
          <TouchableWithoutFeedback onPress={() => setIsSaved(!isSaved)}>
            {isSaved ? (
              <SaveActiveIcon color={'#fff'} />
            ) : (
              <SaveDefaultIcon color={'#fff'} />
            )}
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={{marginHorizontal: 10, marginTop: 8}}>
        <View>
          <Text style={{color: '#fff'}}>
            <Text style={{fontWeight: '500'}}>{name} </Text>
            {displayCaption}
            {!isMoreShown && shouldTruncate && (
              <Text
                onPress={() => setIsMoreShown(true)}
                style={{color: '#a6a6a6'}}>
                ... more
              </Text>
            )}
            {isMoreShown && (
              <Text>
                <Text
                  onPress={() => setIsMoreShown(false)}
                  style={{color: '#a6a6a6'}}>
                  less
                </Text>
              </Text>
            )}
          </Text>
        </View>
      </View>
      <Text style={{color: '#909090', marginLeft: 8}}>{postedAt}</Text>
    </View>
  );
};

export default Footer;
