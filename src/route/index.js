import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, SplashScreen} from '../screens';

const Stack = createStackNavigator();

export default function index() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
