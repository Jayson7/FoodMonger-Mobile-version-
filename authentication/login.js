import React from 'react';
import {
  Image,
  TextInput,
  View,
  Text,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {
  return (
    // login screen wrapper component
    <View style={styles.loginContainer}>
      {/* status bar configuration */}
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      {/* login screen inner component */}
      <View>
        <Image
          source={require('../images/login.png')}
          style={styles.imageLogin}
        />
        <View>
          <Text style={styles.textLogin}>Login</Text>
        </View>
        <View style={styles.loginSec}>
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
        </View>
      </View>
      {/* login screen inner component ends here */}
    </View>
    // login screen wrapper component ends here
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  imageLogin: {
    width: '100%',
    height: '30%',
    resizeMode: 'contain',
  },

  loginSec: {
    marginTop: '10%',
    alignItems: 'center',
    backgroundColor: '#061135',
    height: '70%',
  },
  textLogin: {
    color: '#000a35',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: '10%',
    textAlign: 'center',
    fontFamily: 'Roboto',
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
});
