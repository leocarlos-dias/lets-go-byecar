import React, { createContext, useEffect, useState } from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleTheme = () => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const localStorageDarkMode = localStorage.getItem('darkMode');
    if (localStorageDarkMode) {
      setDarkMode(JSON.parse(localStorageDarkMode));
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
