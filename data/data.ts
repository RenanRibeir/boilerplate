export interface user {
  login: String;
  password: String;
}

export interface ContextValue {
  login: string;
  setLogin(state: string): void;
  password: string;
  setPassword(state: string): void;
}

export const users: user[] = [
  {
    login: 'user1',
    password: '123123',
  },
  {
    login: 'user2',
    password: '123123',
  },
];
