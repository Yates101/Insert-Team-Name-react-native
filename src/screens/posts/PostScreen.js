import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';
import { Headbar, Post } from '../../components/index';
import axios from 'axios';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const PostList = (props) => {
  const {posts = [], user} = props
  return posts.reverse().map((post)=> <Post key={post.id} {...post} {...{user}}/>)
}

const PostsScreen = (props, { route }) => {
  const navigation = useNavigation()
  
  const [posts, setPosts] = useState([])

  const getPosts = async() => {
    await axios.get("http://localhost:3001/posts").then((res) => {
      setPosts(res.data)
    })
  }
  
  useEffect(() => {
   getPosts()
  }, [])

  return (
    <View>
      <Headbar/>
      <ScrollView>
        <View style={styles.container}>
          <PostList posts={posts} user={props.user.id}/>
        </View>
      </ScrollView>   
      <View style={styles.createPostButton}>
        <Button 
          style={styles.createPostButton} 
          title='Create Post' 
          onPress={() => navigation.navigate("Create Post")} 
        />
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cdd7d6',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  createPostButton: {
    backgroundColor: '#FFED00',
    width: "100%",
    height: 66,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    bottom: 50,
  }
});

export {PostsScreen};