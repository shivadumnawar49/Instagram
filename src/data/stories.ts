import {ImageSourcePropType} from 'react-native';

export type StoryType = [
  id: string,
  name: string,
  image: ImageSourcePropType,
  isUser: boolean,
];

export const stories = [
  {
    id: '0',
    name: 'Your story',
    image: require('../assets/images/a8.png'),
    isUser: true,
  },
  {id: '1', name: 'watson', image: require('../assets/images/a1.png')},
  {id: '2', name: 'emily', image: require('../assets/images/a2.png')},
  {id: '3', name: 'ariana', image: require('../assets/images/a3.png')},
  {id: '4', name: 'cara', image: require('../assets/images/a4.png')},
  {id: '5', name: 'kendall', image: require('../assets/images/a5.png')},
  {id: '6', name: 'tyson', image: require('../assets/images/a6.png')},
  {id: '7', name: 'jon', image: require('../assets/images/a7.png')},
  {id: '8', name: 'david', image: require('../assets/images/a8.png')},
];
