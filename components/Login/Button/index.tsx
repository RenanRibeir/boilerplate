import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface props{
    name:String;
    navigation:NavigationProp<ParamListBase>;
} 

const Button = ({navigation,name}: props) => {

  return(
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
}

export default Button;