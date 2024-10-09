import { createContext } from 'react';
import {useState} from "react";

export const themeContext = createContext();
export const Provider = themeContext.Provider;

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(false);

  return (
    <Provider value={{ theme, setTheme }}>
      {children}
    </Provider>
  );
};

export default ThemeProvider;