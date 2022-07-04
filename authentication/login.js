import React from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';

export default function Login() {
  return (
    <View style={styles.loginContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#ffffff" />
      <Text> Login Please </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  loginContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
