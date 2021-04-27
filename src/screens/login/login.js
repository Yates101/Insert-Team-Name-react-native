import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Headbar } from '../../components/headbar'
import axios from 'axios';

const LogInScreen = ({ navigation }) => {

const [userName, setUserName] = useState('')
const [passWord, setPassWord] = useState('')


const createUser = async() => {
  const fakeResponse = { "forename": '', "surname": ' ', "username": ' ', "email": ' ', "password": ' ', "profilePic": "" },

    try{
      const getRequest = await axios.get("https://acebook--backend.herokuapp.com/users")
      if ( !getRequest.ok ) {
        return fakeResponse
      } else {
        console.log({error})
      }
        // { "username": '', "password": '' })
        navigation.navigate("Log In");
    }
    catch(error){
      console.log('error', {error});
    }
  }

  return (
<View>
<Headbar/>
    <View style={styles.container}>
          <TextInput style={styles.textInput}
            placeholder="username"
            onChangeText={(text) => setUserName(text)}
            value={userName}
          />
          <TextInput style={styles.textInput}
            placeholder="password"
            onChangeText={(text) => setPassWord(text)}
            value={passWord}
          />
          <View style={styles.buttonContainer}>
            <Button title="submit" style={styles.button}/>
          </View>
            <Text>Not a user yet?</Text>
            <Button 
              onPress={() => navigation.navigate('Sign Up')}
              title="Create an account!" 
              color='white'              
            />     
            <Button 
              onPress={() => navigation.navigate('Posts')}
              title="Posts" 
              color='white'              
            />        
    </View>
</View>  );
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

export {LogInScreen};
