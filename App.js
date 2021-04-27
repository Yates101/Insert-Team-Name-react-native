import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Button } from 'react-native';
import axios from 'axios';
import { LogInScreen } from './src/screens/';
import { SignUpScreen } from './src/screens/signup/signup';

const Stack = createStackNavigator();

export default function App() {
  // const [user, setUser] = useState({});
  const [state, setState] = useState({
    isLoggedIn: false,
    user: {},
  });

  // let componentDidMount = () => {
  loginStatus()
  // }

  function loginStatus() {
    const url = "http://localhost:3001/logged_in";
    fetch(url, { credentials: 'include' })
    .then(response => {
      if (response.json('logged_in') === true) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    // .catch(() => this.props.history.push("/"));
  }

  // Started GET "/logged_in" for ::1 at 2021-04-27 14:45:05 +0100
  // Processing by SessionsController#is_logged_in? as */*
  // [active_model_serializers] Rendered ActiveModel::Serializer::Null with Hash (0.08ms)
  // Completed 200 OK in 1ms (Views: 1.1ms | Allocations: 253


  function handleLogin(data) {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  function handleLogout() {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Log In">
          {props => <LogInScreen {...props} state={state} />}
        </Stack.Screen>
        <Stack.Screen name="Sign Up">
          {props => <SignUpScreen {...props} state={state} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


<Stack.Screen name="Home">
  {props => <HomeScreen {...props} extraData={someData} />}
</Stack.Screen>

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
