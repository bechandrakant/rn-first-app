import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Green() {
    return (
      <View style={styles.container}>
        <Text>Green</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0f0',
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
})
