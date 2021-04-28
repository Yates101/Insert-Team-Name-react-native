import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogInScreen, SignUpScreen, CreatePost, PostsScreen } from './src/screens/';

export default function App() {

const Stack = createStackNavigator();

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
        <Stack.Screen
          name="Create Post"
          component={CreatePost}
          option={{ title: 'Create Post' }}
          />
        <Stack.Screen
          name="Username"
          component={PostsScreen}
          options={{ title: 'posts' }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
