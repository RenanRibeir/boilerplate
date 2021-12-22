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
} 

const Button = ({navigation,name}: props) => {

  return(
    <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Home')}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

export default Button;