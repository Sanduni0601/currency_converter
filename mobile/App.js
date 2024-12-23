import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      
     <TextInput style={styles.input}
     mode="outlined"
     placeholder = "Enter amount in LKR"
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  }
});
