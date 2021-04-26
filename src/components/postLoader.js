import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const PostLoader = () => {
const [postData, setPostData] = useState('')
console.log(postData)
async function PostFetch() {
  
    fetch("https://acebook--backend.herokuapp.com/posts")
    .then((response) => response.json())
      .then((json) => setPostData(json))
      console.log(postData)
      .catch((error) => console.error(error))

  }
    return(
      <View>
        <Text>{postData}</Text>
      </View>
  )
};

export {PostLoader};