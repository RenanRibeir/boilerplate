import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';
import { Dispatch, SetStateAction } from "react";

interface props{
    title:string;
    placeHolder: string;
    setTitle?: Dispatch<SetStateAction<string>>;
} 

const Input = ({title,setTitle,placeHolder}: props) => {

  return (
    <>
      <TextInput value={title} onChangeText={setTitle} placeholder={placeHolder}/>
    </>
  );
}

export default Input;