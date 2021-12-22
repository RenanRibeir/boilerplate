import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Input from '../Input';
import Button from '../Button';

import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface props{
    navigation:NavigationProp<ParamListBase>;
} 

const App = ({navigation}:props) => {

  return (
    <SafeAreaView>
      
      <Input title={'Login'}/>
      <Input title={'Senha'}/>
      <Button navigation={navigation} name={'Login'}/>

    </SafeAreaView>
  );
};

export default App;