import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { Headbar } from '../../components/headbar'
import axios from 'axios';

const CreatePost = (props, { navigation }) => {

  const [newPost, setNewPost] = useState('')

  console.log(props)

  const createNewPost = async() => {
    try{
      await axios.post("https://acebook--backend.herokuapp.com/posts",
      { content: newPost, user_id: 3 })
      navigation.push("Username");
    }
    catch(error){
      window.alert("Write something in contents, ya numpty!")
      console.log('error', {error})
    }
  }  

   const keyPressed = (event) => {
    if (event.key === "Enter") {
      createNewPost();
    }
  } 

  return(
    <View>
    <Headbar {...props}/>
      <View style={styles.container}>
        <TextInput
        style={styles.textInput}
        placeholder="What is on your mind"
        onChangeText={(text) => setNewPost(text)}
         onKeyPress={(key) => keyPressed(key)}
        value={newPost}
        />
        <View style={styles.buttonContainer}>
          <Button title="Create Post" style={styles.button} onPress={() => {createNewPost();}}/>
        </View>
      </View>
    </View>
  )
};

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#696969',
      alignItems: 'center',
      justifyContent: 'flex-start',
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
      width: '80%',
      height: 100,
    },
  
    button: {
      color: 'white',
      width: 100,
    },
  
    buttonContainer: {
      backgroundColor: 'blue',
    }
  
});

export { CreatePost };