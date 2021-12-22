import React from 'react';
import {Text} from 'react-native';
import UserProvider, {useUser} from '../../../context/user';

const App = () => {
  const {login} = useUser();

  return (
    <UserProvider>
      {/* <Navbar />*/}
      <Text style={{color: '#000'}}>Login user: {login}</Text>
    </UserProvider>
  );
};

export default App;
