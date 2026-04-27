import React, { createContext, useState, useContext } from 'react';
import { darkTheme, lightTheme } from '../styles/theme';

const ThemeContext = createContext({
  theme: darkTheme,
  isDark: true,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);