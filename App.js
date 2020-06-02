/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import SplashScreen from './Components/SplashScreen'
import SearchDocSplash from './Components/SearchDocSplash'

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SearchDocSplash" component={SearchDocSplash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
