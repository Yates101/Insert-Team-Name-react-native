import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Button } from 'react-native';
import axios from 'axios';
import { LogInScreen } from './src/screens/';
import { SignUpScreen } from './src/screens/signup/signup';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = { 
      isLoggedIn: false,
      user: {},
     };
  }

  componentDidMount() {
    this.loginStatus()
    console.log(this.state.isLoggedIn)
    console.log(this.state.user)
  }

  loginStatus() {
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

  handleLogin(data) {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout() {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
    return (
      <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Log In">
            {props => <LogInScreen {...props} user={this.state.user} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>}
          </Stack.Screen>
          <Stack.Screen name="Sign Up">
            {props => <SignUpScreen {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
  }
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
export default App;