import React, {createContext, useState} from 'react';
import {ContextValue, user, users} from '../../data/data';

export const AppContext = createContext<ContextValue>({} as ContextValue);

const UserProvider = ({children}: any) => {
  const [password, setPassword] = useState<string>('');
  const [login, setLogin] = useState<string>('');

  function auth(element: user) {
    const search = users.find((e: user) => e.login === element.login);

    if (search !== undefined && search?.password === element.password) {
      return true;
    } else {
      return false;
    }
  }

  const value = {
    login,
    setLogin,
    password,
    setPassword,
    auth,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default UserProvider;
