import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import useUser from '../../../context/useUser';
import style from '../../Home/HomePage/style';

const App = () => {
  const {login} = useUser();

  console.log(login);

  return (
    <SafeAreaView>
      <Text style={style.text}>Login user: {login}</Text>
    </SafeAreaView>
  );
};

export default App;
