import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textBox}
        placeholder="Text Box 1"
      />
      <TextInput
        style={styles.textBox}
        placeholder="Text Box 2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  textBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});
