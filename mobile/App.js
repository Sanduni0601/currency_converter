import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [lkr, setlkr] = useState('');
  const [usd, setUsd] = useState('');

  const convertToUsd = () => {
    const conversionRate = 0.003;
    const converted = (parseFloat(lkr) * conversionRate).toFixed(2);
    setUsd(converted);
  };

  return (
    <View style={styles.container}>
      
     <TextInput style={styles.input}
     mode="outlined"
     placeholder = "Enter amount in LKR"
     value={lkr}
    onChangeText={setlkr}
     />

      <Button title="Convert" onPress={convertToUsd} />

      {usd ? <Text style={styles.result}>USD: ${usd}</Text> : null}
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
  },
  result: {
    fontSize: 20,
    color: '#333',
    marginTop: 20,
  }
});
