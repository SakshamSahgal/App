// HomeScreen.js
import React,{useState} from 'react';
import { View, TextInput, StyleSheet,Button } from 'react-native';


export default function HomeScreen({navigation}) {
    
    const [textBox1Value, setTextBox1Value] = useState('');
    const [textBox2Value, setTextBox2Value] = useState('');


    const handleSubmission = () => {
        // Log the values
        console.log('Text Box 1 Value:', textBox1Value);
        console.log('Text Box 2 Value:', textBox2Value);
        
        navigation.navigate('Welcome', {
            FirstName : textBox1Value,
            SecondName : textBox2Value,
        });

      };
  return (
            <View style={styles.container}>
            <TextInput
                style={styles.textBox}
                placeholder="Text Box 1"
                onChangeText={text => setTextBox1Value(text)}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Text Box 2"
                onChangeText={text => setTextBox2Value(text)}
            />
            <Button
                title="Submit"
                onPress={handleSubmission}
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
