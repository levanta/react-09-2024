import { createContext } from 'react';
import {useState} from "react";

export const userContext = createContext();
export const Provider = userContext.Provider;

const UserProvider = ({children}) => {
  const [user, setUser] = useState('');

  return (
    <Provider value={{ user, setUser }}>
      {children}
    </Provider>
  );
};

export default UserProvider;