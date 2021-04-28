import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function Headbar() {

  // const [loaded] = useFonts({
  //   Noto: require('../../assets/fonts/NotoSans-Bold.ttf'),
  // });

  // if (!loaded) {
  //   return null;
  // }

  return (
    <View style={styles.header}>
      <Text style={styles.text}>IkeBook</Text>
    </View>
  )
}
      
const styles = StyleSheet.create({
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
    fontWeight: 'bold',
    color: '#FFED00'
  },
})

export {Headbar};
