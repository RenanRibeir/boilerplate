import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import style from './style';

interface props{
    name:String;
    navigation:NavigationProp<ParamListBase>;
    onPress: () => void;
} 

const Button = ({navigation,name,onPress}: props) => {

  return(
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

export default Button;