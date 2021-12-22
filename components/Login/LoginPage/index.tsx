import React, { useEffect, useState } from 'react';
import {
  Alert,
  SafeAreaView,
} from 'react-native';

import Input from '../Input';
import Button from '../Button';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import style from './style';
import { user, users } from '../../../data/data'
import { useUser } from '../../../context/user';

interface props{
    navigation:NavigationProp<ParamListBase>;
} 

const App = ({navigation}:props) => {

  const [loginLocal,setLoginLocal] = useState<string>('');
  const [password,setPassword] = useState<string>('');

  const { login,setLogin } = useUser();

  useEffect(()=>{
    setLogin(loginLocal);
    console.log(login);
  },[loginLocal])

  function auth(){
      const search = users.find((element:user) => element.login == loginLocal);
      
      if(search?.login === loginLocal &&  password === (users.find((element:user) => element.password == password)?.password))
      {
        navigation.navigate('Home');
      }else{
        Alert.alert("Error","Login or Password incorrect")
      }
  }
   
  return (
    <SafeAreaView style={style.container}>
      
      <Input title={loginLocal} setTitle={setLoginLocal} placeHolder="Login"/>
      <Input title={password} setTitle={setPassword} placeHolder="Password"/>
      <Button onPress={auth} navigation={navigation} name={'Login'}/>

    </SafeAreaView>
  );
};

export default App;