import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Headbar } from '../../components/headbar'
import axios from 'axios';

const LogInScreen = (props, { navigation, route }) => {

console.log(props)

const [userName, setUserName] = useState('')
const [passWord, setPassWord] = useState('')

  const onSubmit = () => {
    fetch('http://127.0.0.1:3001/login', {
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
      props.handleLogin(json)
      props.navigation.navigate('Sign Up');
      })
    .catch((error) => console.error(error));
  };

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
        secureTextEntry={true}
        placeholder="password"
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
        onPress={() => props.navigation.navigate('Sign Up')}
        title="Create an account!"        
        />
      </View>
    </View>  
    );
  };

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
    color: 'black',
    width: 100,
  },

  buttonContainer: {
    backgroundColor: 'blue',
  }

});

export { LogInScreen };