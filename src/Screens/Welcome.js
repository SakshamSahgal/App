// Welcome.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome({ route }) {

  const { FirstName , SecondName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hello, Welcome!</Text>
      <Text style={styles.welcomeText}>{FirstName}  {SecondName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
