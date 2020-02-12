import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Red from './components/Red';
import Green from './components/Green';
import Blue from './components/Blue';

export default function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Hello World Buddy!</Text>
      <Red />
      <Green />
      <Blue />
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
