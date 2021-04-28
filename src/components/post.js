import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import {Text, StyleSheet, View, Image} from 'react-native'
import axios from 'axios';
import { withTiming } from 'react-native-reanimated';
=======
import {Text, StyleSheet, View} from 'react-native'
import axios from 'axios';
>>>>>>> origin/logout

const Post = ({ user_id: id, content: body }) => {

  const [postUser, setPostUser] = useState("")

  const getPostUser = async() => {
    await axios.get(`https://acebook--backend.herokuapp.com/users/${id}`).then((res) => {
      setPostUser(res.data.username)
    })
  }
<<<<<<< HEAD
  
=======

>>>>>>> origin/logout
  useEffect(() => {
   getPostUser()
  }, [])

<<<<<<< HEAD
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
        <Image
          style={styles.ikeButton}
          source={require('../../assets/IkeButton.png')}
        />
        <Image
          style={styles.commentButton}
          source={require('../../assets/comment.png')}
        />
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
=======
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
>>>>>>> origin/logout
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
<<<<<<< HEAD
  ikeButton: {
    height: 13,
    width: 15,
    margin: 5
  },
  commentButton: {
    height: 13,
    width: 17,
    margin: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 5
  }
});

export {Post}
=======
  tweetBody: {
    backgroundColor: 'white',
    marginTop: 20,
    marginLeft: 4,
    marginRight: 4,
  }
});

export {Post}
>>>>>>> origin/logout
