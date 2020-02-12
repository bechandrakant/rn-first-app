import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SecondComponent from './components/SecondComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World Buddy!</Text>
      <SecondComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
