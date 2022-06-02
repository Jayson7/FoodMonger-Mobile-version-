import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

const GreeterApp = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Pageone">
      <Stack.Screen name="Pageone" component={PageOne} />
      <Stack.Screen name="Pagetwo" component={PageTwo} />
      <Stack.Screen name="Pagethree" component={PageThree} />
    </Stack.Navigator>
  );
};

export default GreeterApp;
