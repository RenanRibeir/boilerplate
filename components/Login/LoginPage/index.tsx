import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Input from '../Input';
import Button from '../Button';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import style from './style';

interface props{
    navigation:NavigationProp<ParamListBase>;
} 

const App = ({navigation}:props) => {

  const [login,setLogin] = useState<string>('');
  const [password,setPassword] = useState<string>('');
   
  return (
    <SafeAreaView style={style.container}>
      
      <Input title={login} setTitle={setLogin} placeHolder="Login"/>
      <Input title={password} setTitle={setPassword} placeHolder="Password"/>
      <Button navigation={navigation} name={'Login'}/>

    </SafeAreaView>
  );
};

export default App;