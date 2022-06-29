import React from 'react';

import GreeterApp from './Onboarding/greetApp';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
const App = () => {
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
      <GreeterApp />
    </PaperProvider>
  );
};

// general css for all components if needed

export default App;
