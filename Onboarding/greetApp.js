import React from 'react';

import {View, StyleSheet} from 'react-native';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import Swiper from 'react-native-swiper';

const GreeterApp = () => {
  return (
    <Swiper style={styles.swiper} showsButtons={false}>
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

const styles = StyleSheet.create({
  swiper: {
    flex: 1,
    backgroundColor: '#1F453C',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
});
export default GreeterApp;
