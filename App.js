import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, Button } from 'react-native';

export default function App() {

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.text}>acebook</Text>
      </View>
        <View style={styles.container}>
          <TextInput style={styles.textInput}
            placeholder="email"
          />
          <TextInput style={styles.textInput}
            placeholder="password"
          />
          <View style={styles.buttonContainer}>
            <Button title="submit" style={styles.button}/>
          </View>
          <Text>Not a user yet?</Text>
          <Text>Create an account!</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },

  header: {
      alignSelf: 'stretch',
      height: 52,
      flexDirection: 'row', // row
      backgroundColor: '#179aff',
      alignItems: 'flex-end',
      justifyContent: 'space-between', // center, space-around
      paddingLeft: 10,
      paddingRight: 10
    },

  text: {
    fontSize: 32,
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
