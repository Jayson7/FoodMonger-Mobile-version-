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
      style={{backgroundColor: '#030c29'}}
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
              color="#ffff07"
              style={styles.Username_icon}
            />
            <TextInput
              style={styles.Usernameinput}
              placeholder="Username"
              placeholderTextColor="#ffffff"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.Password}>
            <Icon
              name="lock"
              size={20}
              color="#ffff07"
              style={styles.Password_icon}
            />
            <TextInput
              style={styles.PasswordInput}
              placeholder="Password"
              placeholderTextColor="#ffffff"
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
    backgroundColor: '#030c29',
    height: '100%',
  },
  textLogin: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: '5%',
    fontFamily: 'Ubuntu',
  },
  textLoginMini: {
    color: 'white',
    fontSize: 16,
  },
  Username: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '10%',
    borderBottomWidth: 3,
    borderColor: '#ffff07',
    borderRadius: 10,
    width: '70%',
    height: 45,
    paddingHorizontal: '5%',
    backgroundColor: '#030c29',
    marginHorizontal: '10%',
  },
  Username_icon: {
    marginRight: '5%',
  },

  Usernameinput: {
    fontSize: 17,
    color: '#ffffff',
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
    borderColor: '#ffff07',
    borderRadius: 10,
    width: '70%',
    height: 45,
    paddingHorizontal: '5%',
    backgroundColor: '#030c29',
    marginHorizontal: '10%',
  },
  Password_icon: {
    marginRight: '5%',
  },
  PasswordInput: {
    fontSize: 15,
    color: '#b3b6bb',
    fontFamily: 'Roboto',
  },
  button: {
    marginTop: '7%',
    width: '55%',
    height: 52,
    borderRadius: 10,
    backgroundColor: '#cac701',
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
    color: '#ffee00',
    fontSize: 17,
    fontWeight: 'bold',
    fontFamily: 'Ubuntu',
    marginTop: '3%',
    textAlign: 'center',
  },
  signUp: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: '5%',
    textAlign: 'center',
  },
  signupWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Ubuntu',
  },
  signupText: {
    color: '#075eff',
    fontSize: 15,
    fontWeight: 'bold',

    marginTop: '5%',
    textAlign: 'center',
  },
  loginDivide: {
    backgroundColor: 'white',
    height: 40,
    width: '100%',
    alignContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  subtractImg: {
    width: '30%',
    height: 20,
    marginHorizontal: 10,
  },
  or: {
    fontSize: 20,
    color: 'black',
  },
});
