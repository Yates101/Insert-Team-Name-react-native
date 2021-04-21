import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>Acebook</Text>
        <View>
          <TextInput style={styles.textInput}/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
  
    width: '100%',
    height: '10%',
    backgroundColor: '#179aff',
    alignItems: 'flex-end',
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
  },

});
