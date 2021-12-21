import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Input from '../Input';
import Button from '../Button';

const App = () => {

  return (
    <SafeAreaView>
      
      <Input title={'Login'}/>
      <Input title={'Senha'}/>
      <Button name={'Login'}/>

    </SafeAreaView>
  );
};

export default App;