import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useState,
} from 'react';

type ContextValue = {
  login: string;
  setLogin: Dispatch<React.SetStateAction<string>>;
  password: string;
};

export const AppContext = createContext<ContextValue>({
  login: 'default',
  password: ' ',
  setLogin: () => null,
});

type Props = {
  children: ReactNode;
};

export default function UserProvider(props: Props) {
  const {children} = props;

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState(' ');

  const value = {
    login,
    setLogin,
    password,
    setPassword,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useUser() {
  const context = useContext(AppContext);
  return context;
}
