import React from 'react';

import {View, StyleSheet} from 'react-native';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import Swiper from 'react-native-swiper';

const GreeterApp = () => {
  return (
    <Swiper
      showsButtons={false}
      autoplay={true}
      dotColor={'green'}
      autoplayTimeout={5.0}>
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

const styles = StyleSheet.create({});
export default GreeterApp;
