import React from 'react';

import {View} from 'react-native';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import Swiper from 'react-native-swiper';

const GreeterApp = () => {
  return (
    <Swiper showsButtons={true}>
      <View>
        <PageOne />
      </View>
      <View>
        <PageTwo />
      </View>
      <View>
        <PageThree />
      </View>
    </Swiper>
  );
};

export default GreeterApp;
