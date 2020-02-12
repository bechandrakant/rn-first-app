import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class SecondComponent extends Component {
  render() {
    return (
      <View>
        <Text> Second Component </Text>
      </View>
    )
  }
}

const style = StyleSheet.create({ 
  container: {
      color: '#0f0',
  },
})

export default SecondComponent
