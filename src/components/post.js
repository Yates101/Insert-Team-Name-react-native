import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import axios from 'axios';
import { IkeButton, CommentButton } from '../components/PostButtons';


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

  const [liked, setLiked] = useState(false)

  return (
  <View style={styles.post}>
    <Text>{postUser}</Text>
      <View style={styles.row}>
        <Image
          style={styles.userImage}
          source={require('../../assets/display.png')}
        />
        <Text style={styles.postBody}>{body}</Text>
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setLiked((previous) => !previous)}>
            <IkeButton width={17} height={19} margin={5} color={liked ? 'yellow' : "#009fe3"} />
          </TouchableOpacity>
        <CommentButton width={17} heigth={21} margin={5}/>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  post: {
    height: 100,
    width: 400,
    marginBottom: 8,
  },
  postBody: {
    backgroundColor: 'white',
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    height: "80%",
    width: "75%",
    alignItems: "flex-end",
    padding: 8,
    overflow: 'hidden'
  },
  userImage: {
    height: 60,
    width: 60
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5,
    margin: 5
  }
});

export {Post}
