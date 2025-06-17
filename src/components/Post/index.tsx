import {View, Text} from 'react-native';
import React from 'react';
import {ImageSourcePropType} from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

type User = {
  id: string;
  name: string;
  image: ImageSourcePropType;
  bio: string;
};

type PostType = {
  id: string;
  user: User;
  image?: ImageSourcePropType;
  video?: number | string;
  thumbnail?: ImageSourcePropType;
  caption: string;
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  postedAt: string;
};

type PostProps = {
  post: PostType;
  isPlaying: boolean;
};

const Post = ({post, isPlaying}: PostProps) => {
  return (
    <View>
      <Header
        userId={post.user.id}
        profilePicture={post.user.image}
        name={post.user.name}
        thumbnail={post.thumbnail}
        bio = {post.user.bio}
      />
      <Body image={post.image} video={post.video} isPlaying={isPlaying} />
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
