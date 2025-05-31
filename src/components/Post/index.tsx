import {View, Text} from 'react-native';
import React from 'react';
import Header from './Header';
import {ImageSourcePropType} from 'react-native';
import Body from './Body';
import Footer from './Footer';

type User = {
  name: string;
  image: ImageSourcePropType;
};

type postType = {
  user: User;
  image: ImageSourcePropType;
};

type postProps = {
  post: postType;
};

const Post = ({post}: postProps) => {
  return (
    <View>
      <Header profilePicture={post.user.image} name={post.user.name} />
      <Body image={post.image} />
      <Footer />
    </View>
  );
};

export default Post;
