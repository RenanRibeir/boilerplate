import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

interface props{
    title:String;
} 

const Input = ({title}: props) => {

  return (
  <TextInput>
    <Text>{title}</Text>
  </TextInput>
  );
}

export default Input;