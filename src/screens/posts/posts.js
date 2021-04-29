import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Headbar, Post, LogoutButton } from '../../components/index';
import axios from 'axios';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const PostList = (props) => {
  const {posts = []} = props
  return posts.map((post)=> <Post key={post.id} {...post}/>)
}

const PostsScreen = (props) => {

  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    await axios.get("https://acebook--backend.herokuapp.com/posts").then((res) => {
      setPosts(res.data)
    })
  }

  

  useEffect(() => {
   getPosts()
  }, [])

  return (
    <View>
      <Headbar/>
      <View style={styles.container}>
        <PostList posts={posts}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
});

export {PostsScreen};
