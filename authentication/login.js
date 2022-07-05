import React from 'react';
import {
  Image,
  TextInput,
  View,
  Text,
  StatusBar,
  StyleSheet,
  Pressable,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function Login() {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: '#fffbfb'}}
      resetScrollToCoords={{x: 0, y: 0}}
      contentContainerStyle={styles.container}
      scrollEnabled={true}>
      <View style={styles.loginContainer}>
        {/* status bar configuration */}
        <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
        {/* login screen inner component */}

        <View>
          <Image
            source={require('../images/login.png')}
            style={styles.imageLogin}
          />
        </View>
        <View style={styles.loginSec}>
          <View>
            <Text style={styles.textLogin}>Welcome Back!</Text>
            <Text style={styles.textLoginMini}>Sign in to continue</Text>
          </View>
          <View style={styles.Username}>
            <Icon
              name="user"
              size={20}
              color="#1e04b1"
              style={styles.Username_icon}
            />
            <TextInput
              style={styles.Usernameinput}
              placeholder="Username"
              placeholderTextColor="#050f2c"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.Password}>
            <Icon
              name="lock"
              size={20}
              color="#001da0"
              style={styles.Password_icon}
            />
            <TextInput
              style={styles.PasswordInput}
              placeholder="Password"
              placeholderTextColor="#13096b"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
            />
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <View>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>
          <View style={styles.loginDivide}>
            <Image
              source={require('../images/substract.png')}
              style={styles.subtractImg}
            />
            <Text style={styles.or}>or</Text>
            <Image
              source={require('../images/substract.png')}
              style={styles.subtractImg2}
            />
          </View>

          <View style={styles.socialMedia}>
            <Icon
              name="facebook"
              size={25}
              color="#eccc13"
              style={styles.social_icon}
            />
            <Icon
              name="google"
              size={25}
              color="#eccc13"
              style={styles.social_icon}
            />
            <Icon
              name="twitter"
              size={25}
              color="#eccc13"
              style={styles.social_icon}
            />
          </View>
          <View style={styles.signupWrapper}>
            <Text style={styles.signUp}>Don't have an account ?, </Text>
            <Text
              style={styles.signupText}
              onPress={() => navigation.navigate('Signup')}>
              Sign Up
            </Text>
          </View>
        </View>
        {/* login screen inner component ends here */}
      </View>
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  imageLogin: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },

  loginSec: {
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: '100%',
  },
  textLogin: {
    color: '#0c267c',
    fontSize: 37,
    fontWeight: 'bold',
    marginTop: '5%',
    fontFamily: 'Ubuntu',
  },
  textLoginMini: {
    color: '#090544',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    marginTop: '3%',
  },
  Username: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '10%',
    borderBottomWidth: 3,
    borderColor: '#0ba31f',
    borderRadius: 10,
    width: '70%',
    height: 45,
    paddingHorizontal: '5%',
    backgroundColor: '#fffbfb',
    marginHorizontal: '10%',
  },
  Username_icon: {
    marginRight: '5%',
  },

  Usernameinput: {
    fontSize: 20,
    color: '#1f0761',
    fontFamily: 'Roboto',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: -10,
  },
  Password: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '10%',
    borderBottomWidth: 3,
    borderColor: '#0ba31f',
    borderRadius: 10,
    width: '70%',
    height: 45,
    paddingHorizontal: '5%',
    backgroundColor: '#fffbfb',
    marginHorizontal: '10%',
  },
  Password_icon: {
    marginRight: '5%',
  },
  PasswordInput: {
    fontSize: 20,
    color: '#b3b6bb',
    paddingHorizontal: 10,
    fontFamily: 'Roboto',
  },
  button: {
    marginTop: '10%',
    width: '55%',
    height: 52,
    borderRadius: 10,
    backgroundColor: '#d8b805',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fbefff',
    fontSize: 23,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
  },
  forgotPassword: {
    color: '#1b7e07',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    marginTop: '7%',
    textAlign: 'center',
  },
  signUp: {
    color: '#16ad09',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: '5%',
    textAlign: 'center',
    fontFamily: 'Ubuntu',
  },
  signupWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
  },
  signupText: {
    color: '#042180',
    fontSize: 18,
    fontWeight: 'bold',

    marginTop: '5%',
    textAlign: 'center',
  },
  loginDivide: {
    height: 30,
    marginTop: '3%',
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtractImg: {
    width: '30%',
    height: 3,
    marginHorizontal: 10,
  },
  or: {
    fontSize: 20,
    color: '#deec0eff',
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
  },
  subtractImg2: {
    width: '30%',
    height: 3,
    marginHorizontal: 10,
  },
  socialMedia: {
    flexDirection: 'row',
    marginTop: '7%',
  },
  social_icon: {
    marginHorizontal: 15,
    backgroundColor: '#082480',
    paddingHorizontal: 12,
    paddingVertical: 7,
  },
});
