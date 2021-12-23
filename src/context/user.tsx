import React, {createContext, useState} from 'react';
import {ContextValue} from '../data/data';

export const AppContext = createContext<ContextValue>({} as ContextValue);

const UserProvider = ({children}: any) => {
  const [password, setPassword] = useState<string>('');
  const [login, setLogin] = useState<string>('');

  // -- teste de função sem usar hooks
  // let x = ' ';

  // function setX(text: string) {
  //   x = text;
  // }

  const value = {
    login,
    setLogin,
    password,
    setPassword,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default UserProvider;
