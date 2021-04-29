import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LogoutButton } from './logoutButton';
import { useNavigation } from '@react-navigation/native';

function Headbar({loggedInStatus}) {

  const navigation = useNavigation();
  let logoutButton = null;

  // console.log(navigation.getParam('loggedInStatus'))
  console.log(loggedInStatus);

  if (loggedInStatus === true) {
    logoutButton = <LogoutButton />
  }

  // let logoutButton = null;
  // let loggedIn = false
  
  // fetch('http://localhost:3001/login', {
  //   method: 'POST',
  //   mode: 'cors',
  //   credentials: 'include',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   referrerPolicy: 'no-referrer',
  //   body: JSON.stringify( { user: {"username": userName, "password": passWord } } )
  //   })
  // .then((response) => response.json())
  // .then((json) => {
  //   if (json.logged_in === true) {
  //     loggedIn = true;
  //   } else {
  //     loggedIn = false;
  //   }
  //   })
  // .catch((error) => console.error(error));

  // if (loggedIn) {
  //     logoutButton = <LogoutButton />
  //   }

  return (
    <View style={styles.header}>
      <Text style={styles.text}>IkeBook</Text>
      {logoutButton}
    </View>
  )
}
      
const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#179aff',
    alignItems: 'flex-end',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },

  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFED00'
  }
})

export {Headbar};
