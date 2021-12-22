import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
} from 'react-native';

import Input from '../Input';
import Button from '../Button';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import style from './style';
import { user, users } from '../../../data/data'

interface props{
    navigation:NavigationProp<ParamListBase>;
} 

const App = ({navigation}:props) => {

  const [login,setLogin] = useState<string>('');
  const [password,setPassword] = useState<string>('');

  function auth(){
      const search = users.find((element:user) => element.login == login);
      
      if(search?.login === login &&  password === (users.find((element:user) => element.password == password)?.password))
      {
        navigation.navigate('Home');
      }else{
        Alert.alert("Error","Login or Password incorrect")
      }


  }
   
  return (
    <SafeAreaView style={style.container}>
      
      <Input title={login} setTitle={setLogin} placeHolder="Login"/>
      <Input title={password} setTitle={setPassword} placeHolder="Password"/>
      <Button onPress={auth} navigation={navigation} name={'Login'}/>

    </SafeAreaView>
  );
};

export default App;