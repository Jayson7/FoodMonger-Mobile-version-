import React from 'react';

import GreeterApp from './Onboarding/greetApp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './authentication/login';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
const App = () => {
  const Stack = createNativeStackNavigator();
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="GreeterApp" component={GreeterApp} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

// general css for all components if needed

export default App;
