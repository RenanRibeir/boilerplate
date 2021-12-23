import React from 'react';
import {TextInput} from 'react-native';
import style from './style';

interface props {
  title: string;
  placeHolder: string;
  setTitle(text: string): void;
}

const Input = ({title, setTitle, placeHolder}: props) => {
  return (
    <>
      <TextInput
        style={style.input}
        value={title}
        onChangeText={(text: string) => setTitle(text)}
        placeholder={placeHolder}
        placeholderTextColor="#000"
      />
    </>
  );
};

export default Input;
