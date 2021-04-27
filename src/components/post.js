import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View} from 'react-native'
import axios from 'axios';

const Post = ({ user_id: id, content: body }) => {

  const [postUser, setPostUser] = useState("")

  const getPostUser = async() => {
    await axios.get(`https://acebook--backend.herokuapp.com/users/${id}`).then((res) => {
      setPostUser(res.data.username)
    })
  }

  useEffect(() => {
   getPostUser()
  }, [])

  return <View>
  <Text>{postUser}</Text>
  <Text>{body}</Text></View>
}

const styles = StyleSheet.create({
  tweet: {
    backgroundColor: 'lightblue',
    height: 80,
    borderWidth: 1,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  tweetBody: {
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 4,
    marginRight: 4,
  }
});

export {Post}
