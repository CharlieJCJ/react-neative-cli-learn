/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Charlie Ji')
  console.log(name, setName)
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}'s Hello World ReactNative App</Text>
      <Button style = {styles.button} title='Github Website' onPress={()=>{Linking.openURL('https://github.com/CharlieJCJ')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    borderWidth: 10,
    borderColor: 'red',
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle:'italic',
    margin: 10,
  },
  button: {
    color: 'green',
    backgroundColor: '#9930fc',
  },
});

export default App;