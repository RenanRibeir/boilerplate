import React from 'react';
import {
  TextInput,
} from 'react-native';
import { Dispatch, SetStateAction } from "react";
import style from './style';

interface props{
    title:string;
    placeHolder: string;
    setTitle?: Dispatch<SetStateAction<string>>;
} 

const Input = ({title,setTitle,placeHolder}: props) => {

  return (
    <>
      <TextInput style={style.input} value={title} onChangeText={setTitle} placeholder={placeHolder} placeholderTextColor='#000'/>
    </>
  );
}

export default Input;