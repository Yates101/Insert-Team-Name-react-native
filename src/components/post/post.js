import React, { useState, useEffect } from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import axios from 'axios';
import { IkeButton, CommentButton } from '../PostButtons';
import { useNavigation } from '@react-navigation/core';

import dayjs from 'dayjs';

const Post = ( { id: post_id, user_id: user_id, content: body, created_at: created_at, user}) => {
  const navigation = useNavigation()

  const [postUser, setPostUser] = useState("")

  const timeStamp = dayjs(created_at).format("DD/MM")

  const getPostUser = async() => {
    await axios.get(`http://localhost:3001/users/${user_id}`).then((res) => {
      setPostUser(res.data.username)
    })
  }
  
  useEffect(() => {
   getPostUser()
  }, [])

  const [liked, setLiked] = useState(false)
  const [amountOfLikes, setAmountOfLikes] = useState(0)

  const getLikes = async() => {
    await axios.get(`http://localhost:3001/likes/post_id/${post_id}`).then(({data}) => {
      setAmountOfLikes(data.length)
      for (let i = 0; i < data.length; i++) {
        if (data[i].user_id === user) {
          setLiked(true)
          break;
        }
      }
    })
  }

  useEffect(() => {
    getLikes()
  }, [])

  const like = () => {
    if (liked) {
      axios.delete(`http://localhost:3001/likes/0?post_id=${post_id}&user_id=${user}`)
      .then(() => {getLikes(), setLiked(false)})
      
    } else {
      axios.post("http://localhost:3001/likes", 
      { post_id: post_id, user_id: user })
      .then(() => {getLikes(), setLiked(true)} )
    }
  }
  
  return (
  <View style={styles.post}>
    <Text>{postUser}</Text>
      <View style={styles.row}>
        <Image
          style={styles.userImage}
          source={require('../../../assets/display.png')}
        />
        <Text style={styles.postBody}>{body}</Text>
      </View>
      <View style={styles.row}>
      <View style={styles.timeStamp}>
        <Text style={{ left: 5 }}>{timeStamp}</Text>
      </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => like()}>
            <IkeButton width={17} height={19} margin={5} color={liked ? 'yellow' : "#009fe3"} />
          </TouchableOpacity>
          <Text style={styles.amountOfLikes}>{amountOfLikes}</Text>
          <CommentButton width={17} heigth={21} margin={5}/>
        </View>
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
    width: 60,
  },
  row: {
    flexDirection: 'row',
    width: '100%'
  },
  timeStamp: {
    flex: 4,
    paddingLeft: 65
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
    paddingLeft: 30
  },
  amountOfLikes: {
    margin: 5
  }
});

export {Post}
