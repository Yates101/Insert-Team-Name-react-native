import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { Headbar } from '../../components/headbar'
import axios from 'axios';

const createPost = () => {

  const [newPost, setNewPost] = useState('')

  const createNewPost = async() => {
    try{
      axios.post("https://acebook--backend.herokuapp.com/posts",
      { content: newPost, user_id: 5 })
      navigation.navigate("posts");
    }
    catch(error){
      console.log('error', {error})
    }
  }  

  return(
    <View>
    <Headbar/>
      <View>
        <TextInput
        style={styles.newPost}
        placeholder="What is on your mind"
        onChangeText={(text) => setNewPost(text)}
        value={newPost}
        />
        <Button title="Create Post" style={styles.button} onPress={() => {createNewPost();}}/>
      </View>
    </View>
  )
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
}

export { createPost };