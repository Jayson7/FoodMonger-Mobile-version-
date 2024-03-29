import {StyleSheet, StatusBar, Image, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {RadioButton} from 'react-native-paper';
const PageOne = ({navigation}) => {
  return (
    <View style={styles.containers}>
      <View style={styles.contents}>
        <View style={styles.imageContainers}>
          <Image
            source={require('../images/page1.png')}
            style={styles.images}
          />
        </View>
        <View style={styles.textContainers}>
          <Text style={styles.textHeaders}>
            <Text style={styles.dot1}>Food</Text>
            <Text style={styles.dot2}>Mon</Text>
            <Text style={styles.dot3}>Ger</Text>
          </Text>
          <Text style={styles.textSub}>A table that satisfies your belly </Text>
          <Text style={styles.textSubMini}>
            Get meals ordered ro you at the right time when needed.
          </Text>
        </View>
        <Icon
          name="long-arrow-right"
          size={50}
          color="#F3DE21"
          style={styles.icon}
        />
      </View>
      <View style={styles.imageFooters}>
        <Image source={require('../images/F1.png')} style={styles.imageRec1} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containers: {
    // flex: 1,
    backgroundColor: '#111d44',
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
  },
  imageContainers: {
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '10%',
  },
  images: {
    width: 350,
    height: 270,

    borderRadius: 10,
  },
  textContainers: {
    alignItems: 'center',
    marginTop: '10%',
  },
  icon: {
    marginTop: '10%',
    marginBottom: '10%',
  },
  contents: {
    height: 600,
    alignItems: 'center',

    justifyContent: 'space-evenly',
  },

  dot1: {
    color: '#F3DE21',
    fontSize: 45,
  },
  textHeaders: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  dot2: {
    color: '#ffffff',
    fontSize: 40,
  },
  dot3: {
    color: '#ffffff',
    fontSize: 45,
  },
  textSub: {
    fontFamily: 'Ubuntu',
    fontSize: 17,
    marginTop: 5,
    color: 'white',
    marginBottom: 10,

    fontWeight: 'bold',
  },
  textSubMini: {
    fontFamily: 'Ubuntu',
    fontSize: 17,

    color: 'white',
    marginTop: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  imageFooters: {
    position: 'absolute',
    bottom: -200,

    left: -10,
  },
});

export default PageOne;

// const styles = StyleSheet.create({});
