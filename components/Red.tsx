import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Red() {
  return (
    <View style={styles.container}>
      <Text>Red</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})
