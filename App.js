import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Providers from './src/navigation';
import AppStack from './src/navigation/AppStack';

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
