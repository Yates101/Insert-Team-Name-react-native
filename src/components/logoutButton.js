import React from 'react';
import { StyleSheet, Button, View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LogInScreen } from '../screens/';

function LogoutButton() {
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
    // .then((response) => response.json())
    .then((response) => {
      if (response.status === 200){
        alert('Logged out');
      }
      navigation.navigate(screenName);
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

// function LogoutButton () {
//   return (
//     <View>
//       <Button
//         style={styles.button}
//         onPress={() => destroySession()}
//         title="Log out"/>
//     </View>
//   );
// }



const styles = StyleSheet.create({
  button: {
    color: 'black',
    width: 100,
  },
})

export {LogoutButton}
