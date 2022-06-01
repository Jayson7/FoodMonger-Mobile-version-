import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import GreeterApp from './Onboarding/greetApp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const App = () => {
  return (
    <NavigationContainer>
      <GreeterApp />
    </NavigationContainer>
  );
};

// general css for all components if needed

export default App;
