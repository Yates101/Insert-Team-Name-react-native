import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LogInScreen, SignUpScreen, CreatePost, PostsScreen } from './src/screens/';

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
    console.log(`Logged in = ${this.state.isLoggedIn}`)
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
          <Stack.Screen name="Create Post">
            {props => <CreatePost {...props} user={this.state.user} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>}
          </Stack.Screen>
          <Stack.Screen name="Posts">
            {props => <PostsScreen {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      </>
    );
  }
}

export default App;
