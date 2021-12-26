import React, {useEffect} from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {NavigationProp, ParamListBase} from '@react-navigation/native';
import style from './style';
import useUser from '../../context/useUser';
import userService from '../../services/UserService';
import user from '../../context/user';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const App = ({navigation}: props) => {
  const {login, setLogin, password, setPassword} = useUser();

  function Login(){
    const response = userService.auth({login: login,password: password});

    response?navigation.navigate('Home'): Alert.alert('Error', 'Login or Password incorrect');;

  }

  return (
    <SafeAreaView style={style.container}>
      <TextInput
        style={style.input}
        value={login}
        placeholder="Login"
        onChangeText={(text: string) => setLogin(text)}
        placeholderTextColor="#000"
      />

      <TextInput
        style={style.input}
        value={password}
        onChangeText={(text: string) => setPassword(text)}
        placeholder="Password"
        placeholderTextColor="#000"
      />

      <TouchableOpacity style={style.button} onPress={Login}>
        <Text style={style.text}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
