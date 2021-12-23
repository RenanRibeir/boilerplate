import {useContext} from 'react';
import {AppContext} from './user';

const useUser = () => {
  const value = useContext(AppContext);
  if (value === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return value;
};

export default useUser;
