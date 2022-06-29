import {StyleSheet, StatusBar, Image, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {RadioButton} from 'react-native-paper';
const PageTwo = ({navigation}) => {
  return (
    <View style={styles.containers}>
      <StatusBar barStyle="light-content" backgroundColor="#1F453C" />
      <View style={styles.contents}>
        <View style={styles.imageContainers}>
          <Image
            source={require('../images/page2.jpg')}
            style={styles.images}
          />
        </View>
        <View style={styles.textContainers}>
          <Text style={styles.textHeader}>
            <Text style={styles.dot1}>Food</Text>
            <Text style={styles.dot2}>Mon</Text>
            <Text style={styles.dot3}>Ger</Text>
          </Text>
          <Text style={styles.textSub}> A stage that keeps you first </Text>
          <Text style={styles.textSubMini}>
            We deal in highly nurtured and clean mediums
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
        <Image source={require('../images/F2.png')} style={styles.imageRec1} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containers: {
    // flex: 1,
    backgroundColor: '#03231c',
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
  },
  imageContainers: {
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '20%',
  },
  images: {
    width: 350,
    height: 230,
    borderRadius: 10,
  },
  textContainers: {
    alignItems: 'center',
  },

  contents: {
    height: 600,
    alignItems: 'center',

    justifyContent: 'space-evenly',
  },

  dot1: {
    color: '#F3DE21',
    fontSize: 60,
  },
  textHeader: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  dot2: {
    color: '#fff',
    fontSize: 60,
  },
  dot3: {
    color: '#5B37E9',
    fontSize: 60,
  },
  textSub: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    marginTop: 15,
    marginBottom: 10,

    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    marginTop: '12%',
    marginBottom: '12%',
  },
  textSubMini: {
    fontFamily: 'Ubuntu',
    fontSize: 15,
    color: '#fff',
    marginTop: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
  },
  imageFooters: {
    position: 'absolute',
    bottom: -170,

    left: -60,
    right: -10,

    width: '100%',
  },
});

export default PageTwo;

// const styles = StyleSheet.create({});
