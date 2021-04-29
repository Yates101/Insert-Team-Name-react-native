import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { Headbar } from '../../components/headbar'
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {

const [foreName, setForeName] = useState('')
const [surName, setSurName] = useState('')
const [userName, setUserName] = useState('')
const [email, setEmail] = useState('')
const [passWord, setPassWord] = useState('')

const createUser = async() => {
  axios.post("http://localhost:3001/users",
    { "forename": foreName, "surname": surName, "username": userName, 
      "email": email, "password": passWord, "profilePic": "" 
    })
  .then(response => {
    console.log(response)
    if (response.data['username'] === userName) {
      alert('Your account was created successfully')
      navigation.navigate("Log In", { message: 'User successfully created'});
    }
  })
  .catch(error => {
    alert(`${error.response.data.message}`)
    console.log('error', {error});
    })
  }
  
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      createUser();
    }
  } 

  return(
    <View>
    <Headbar/>
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          autoCapitalize='none'
          placeholder="first name"
          onChangeText={(text) => setForeName(text)}
          value={foreName}
        />
        <TextInput style={styles.textInput}
          autoCapitalize='none'
          placeholder="last name"
          onChangeText={(text) => setSurName(text)}
          value={surName}
        />
        <TextInput style={styles.textInput}
          autoCapitalize='none'
          placeholder="username"
          onChangeText={(text) => setUserName(text)}
          value={userName}
        />
        <TextInput style={styles.textInput}
          autoCapitalize='none'
          placeholder="email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput style={styles.textInput}
          autoCapitalize='none'
          secureTextEntry={true}
          placeholder="password"
          onChangeText={(text) => setPassWord(text)}
          onKeyPress={(key) => keyPressed(key)}
          value={passWord}
        />      
  
        <View style={styles.buttonContainer}>
          <Button title="sign up" style={styles.button} onPress={() => {createUser();}}/>
        </View>

      </View>
    </View>
  )
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
    color: 'white',
    width: 100,
  },

  buttonContainer: {
    backgroundColor: 'blue',
  }

});

export { SignUpScreen };