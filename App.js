import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'; 

// 
import { LogInScreen, SignUpScreen } from './src/screens/';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Log In"
          component={LogInScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen 
          name="Sign Up" 
          component={SignUpScreen} 
          options={{ title: 'Join us' }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
