import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LogInScreen } from '../screens/';

function LogoutButton({ LogInScreen }) {
  function destroySession() {
    const navigation = useNavigation();

    fetch('http://localhost:3001/logout', {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
      })
    // .then((response) => response.json())
    .then(() => {
      navigation.navigate(LogInScreen);
      })
    .catch((error) => console.error(error));
  };
  return (
    <View>
      <Button
        style={styles.button}
        onPress={() => destroySession()}
        title="Log out"/>
    </View>
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
