import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Headbar } from '../../components/headbar'

const LogInScreen = ({ navigation }) => {

const [userName, setUserName] = useState('')
const [passWord, setPassWord] = useState('')

<<<<<<< HEAD
  const onSubmit = () => {
    fetch('http://localhost:3001/login', {
=======
const onSubmit = () => {
  fetch('http://localhost:3001/login', {
>>>>>>> origin/logout
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify( { user: {"username": userName, "password": passWord } } )
      })
    .then((response) => response.json())
    .then((json) => {
<<<<<<< HEAD
      navigation.navigate( "Username", { "username": json.user.username, "logged_in": json.logged_in });
      })
    .catch((error) => console.error(error));
  };
=======
      navigation.navigate( "Posts", { "username": json.user.username, "logged_in": json.logged_in });
      })
    .catch((error) => console.error(error));
};
>>>>>>> origin/logout

  return (
  <View>
  <Headbar/>
    <View style={styles.container}>
          <TextInput style={styles.textInput}
            placeholder="username"
            type="text"
            onChangeText={(text) => setUserName(text)}
            value={userName}
          />
          <TextInput style={styles.textInput}
            placeholder="password"
            type="password"
            onChangeText={(text) => setPassWord(text)}
            value={passWord}
          />
          <View style={styles.buttonContainer}>
            <Button
            onPress={() => onSubmit()}
            title="Log in" style={styles.button}/>
          </View>
            <Text>Not a user yet?</Text>
            <Button style={styles.button}
              onPress={() => navigation.navigate('Sign Up')}
<<<<<<< HEAD
              title="Create an account!"        
=======
              title="Create an account!"
            />
            <Button style={styles.button}
              onPress={() => navigation.navigate('Posts')}
              title="Posts (temp)"
>>>>>>> origin/logout
            />
    </View>
</View>  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cdd7d6',
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
    color: 'black',
    width: 100,
  },

  buttonContainer: {
    backgroundColor: 'blue',
  }

});

export { LogInScreen };
