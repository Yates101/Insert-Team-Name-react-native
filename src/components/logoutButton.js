import React from 'react';
import { StyleSheet, Button, View, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LogInScreen } from '../screens/';
// const navigation = useNavigation has to be inside LogoutButton, not destroySession
// screenName passed in to destroySession function because it's called in the Button onPress
// the screenName has to be the name of the screen as a string and not as a variable (e.g. "Log In" as opposed to LogInScreen)
//  Hooks can only be called inside of the body of a function component.
function LogoutButton(props) {
  const navigation = useNavigation();

  function destroySession(screenName) {

    fetch('http://localhost:3001/logout', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
      })
    .then((response) => {
      if (response.status === 200){
        alert('Logged out');
        props.handleLogout();
        navigation.navigate(screenName);
      } else {
        alert('Log out unsuccessful, please try again')
      }
      })
    .catch((error) => console.error(error));
  };


  return (
      <TouchableOpacity
        onPress={() => destroySession("Log In")}
        title="Log out"><Text style={styles.button}>Log Out</Text></TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 8,
    color: 'yellow',
    width: 100,
    fontWeight: "bold",
  },
})

export {LogoutButton}
