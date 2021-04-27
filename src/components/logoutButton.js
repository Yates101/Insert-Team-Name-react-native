import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

function LogoutButton () {
  return (
    <View>
      <Button
        style={styles.button}
        onPress={() => onSubmit()}
        title="Log out"/>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: 'black',
    width: 100,
  },
})

export {LogoutButton}
