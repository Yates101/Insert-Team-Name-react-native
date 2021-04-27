import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Button } from 'react-native';
import axios from 'axios';
import { LogInScreen, PostsScreen, SignUpScreen } from './src/screens/';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState([])

  // useEffect(() => {
  //   getUser()
  // }, [])

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
          name="Posts"
          component={PostsScreen}
          options={{title: "Posts"}}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  textInput: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#E1E5EA',
    borderRadius: 4,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 14,
    paddingRight: 14,
    fontSize: 16,
    color: 'black',
    backgroundColor: 'white',
    width: 200,
  },

  button: {
    color: 'white',
    width: 100,
  },

  buttonContainer: {
    backgroundColor: 'blue',
  }

});
