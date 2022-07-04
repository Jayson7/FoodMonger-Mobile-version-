import {
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';

const PageThree = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containers}>
      <StatusBar barStyle="light-content" backgroundColor="#0c1129" />
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={require('../images/page3.jpg')} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textHeader}>
            <Text style={styles.dot1}>Food</Text>
            <Text style={styles.dot2}>Mon</Text>
            <Text style={styles.dot3}>Ger</Text>
          </Text>
          <Text style={styles.textSub}> Let us run the errand for you </Text>
          <Text style={styles.textSubMini}>
            A delivery suited to perfection just for you and you alone
          </Text>
        </View>
        <View style={styles.ButtonContainers}>
          {/* button for authentication goes here */}
          <View style={styles.buttonText1}>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <View>
                <Text style={styles.buttonText}> Login </Text>
              </View>
            </Pressable>
          </View>
          <View style={styles.buttonText2}>
            <Pressable onPress={() => navigation.navigate('Signup')}>
              <View>
                <Text style={styles.buttonText}> Sign Up </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.imageFooter}>
        <Image source={require('../images/F3.png')} style={styles.imageRec1} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containers: {
    backgroundColor: '#0c1129',
    alignItems: 'center',
    overflow: 'hidden',
    height: '100%',
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '20%',
  },
  image: {
    width: 390,
    height: 270,
    borderRadius: 10,
  },
  textContainer: {
    alignItems: 'center',
  },

  content: {
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
    bottom: -200,

    left: -70,
    right: -30,

    width: '100%',
  },
  ButtonContainers: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '10%',
    marginBottom: '5%',
  },

  buttonText1: {
    backgroundColor: '#3714ff',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText2: {
    backgroundColor: '#d8c51e',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'Ubuntu',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PageThree;

// const styles = StyleSheet.create({});
