import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';

interface props{
    name:String;
} 

const Button = ({name}: props) => {

  return(
    <TouchableOpacity>
      <Text>Login</Text>
    </TouchableOpacity>
  );
}

export default Button;