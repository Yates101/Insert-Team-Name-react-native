import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function logoutButton () {
  return (
    <View style={styles.logoutButton}>
      <Button
        onPress={() => onSubmit()}
        title="Log out" style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: 'black',
    width: 100,
  },
})

export {logoutButton}
