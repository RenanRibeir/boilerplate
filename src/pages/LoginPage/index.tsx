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
import {user, users} from '../../../data/data';
import useUser from '../../context/useUser';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const App = ({navigation}: props) => {
  const {login, setLogin, password, setPassword} = useUser();

  const auth = () => {
    const search = users.find((element: user) => element.login === login);

    if (
      search?.login === login &&
      password ===
        users.find((element: user) => element.password === password)?.password
    ) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Error', 'Login or Password incorrect');
    }
  };

  useEffect(() => {
    console.log(login);
    console.log(password);
  }, [login, password]);

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

      <TouchableOpacity style={style.button} onPress={auth}>
        <Text style={style.text}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
