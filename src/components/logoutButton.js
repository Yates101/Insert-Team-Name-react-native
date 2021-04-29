import React from 'react';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';
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
      <Button
        style={styles.button}
        onPress={() => destroySession("Log In")}
        title="Log out"/>
  );
}

const styles = StyleSheet.create({
  button: {
    color: 'black',
    width: 100,
  },
})

export {LogoutButton}
