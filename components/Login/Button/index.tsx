import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import style from './style';

interface props {
  name: String;
  onPress: () => void;
}

const Button = ({name, onPress}: props) => {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Button;
