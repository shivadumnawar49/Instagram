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

type PostType = {
  id: string;
  user: User;
  image: ImageSourcePropType;
  caption: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  postedAt: string;
};

type PostProps = {
  post: PostType;
};

const Post = ({post}: PostProps) => {
  return (
    <View>
      <Header profilePicture={post.user.image} name={post.user.name} />
      <Body image={post.image} />
      <Footer
        name={post.user.name}
        caption={post.caption}
        likesCount={post.likesCount}
        commentsCount={post.commentsCount}
        sharesCount={post.sharesCount}
        postedAt={post.postedAt}
      />
    </View>
  );
};

export default Post;
