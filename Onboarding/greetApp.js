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
      autoplayTimeout={5.0}
      loop={false}
      dot={
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 4,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 3,
            marginBottom: 3,
            backgroundColor: '#000000',
          }}
        />
      }
      activeDot={
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3,
            backgroundColor: '#ffffff',
          }}
        />
      }>
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
