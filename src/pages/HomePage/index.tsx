import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import useUser from '../../context/useUser';
import style from './style';

const App = () => {
  const {login} = useUser();

  console.log(login);

  return (
    <SafeAreaView style={style.container}>
      <View style={style.navbar}>
        <Text style={style.text}>{login}</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
