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
  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: '#061135'}}
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
            <Text style={styles.textLogin}>Welcome Back</Text>
          </View>
          <View style={styles.Username}>
            <Icon
              name="user"
              size={25}
              color="#101292"
              style={styles.Username_icon}
            />
            <TextInput
              style={styles.Usernameinput}
              placeholder="Username"
              placeholderTextColor="#2d303b"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>
          <View style={styles.Password}>
            <Icon
              name="lock"
              size={25}
              color="#101292"
              style={styles.Password_icon}
            />
            <TextInput
              style={styles.PasswordInput}
              placeholder="Password"
              placeholderTextColor="#2d303b"
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
          <View>
            <Text style={styles.signUp}>Sign Up</Text>
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
    height: 250,
    resizeMode: 'contain',
  },

  loginSec: {
    marginTop: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#061135',
    height: '70%',
  },
  textLogin: {
    color: '#929207',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: '10%',
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
  },
  Username: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '10%',
    borderWidth: 3,
    borderColor: '#929207',
    borderRadius: 10,
    width: '80%',
    height: 50,
    paddingHorizontal: '5%',
    backgroundColor: '#ffffff',
    marginHorizontal: '10%',
  },
  Username_icon: {
    marginRight: '5%',
  },

  Usernameinput: {
    fontSize: 15,

    color: '#b3b6bb',
    fontFamily: 'Roboto',
  },
  Password: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: '10%',
    borderWidth: 3,
    borderColor: '#929207',
    borderRadius: 10,
    width: '80%',
    height: 50,
    paddingHorizontal: '5%',
    backgroundColor: '#ffffff',
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
    marginTop: '10%',
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#dbcd07',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
  },
  forgotPassword: {
    color: '#beac03',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    marginTop: '5%',
    textAlign: 'center',
  },
  signUp: {
    color: '#a6a80c',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    marginTop: '5%',
    textAlign: 'center',
  },
});
