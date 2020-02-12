import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Blue(): JSX.Element {
    return (
      <View style={styles.container}>
        <Text>Blue</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#66f',
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})
