"use client"
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Verificar o valor armazenado no localStorage
      const storedTheme = localStorage.getItem('isDarkMode');
      if (storedTheme !== null) {
        setIsDarkMode(storedTheme === 'true');
      }
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Aplicar a classe de tema ao documento e salvar no localStorage
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }

      if (typeof window !== 'undefined') {
        localStorage.setItem('isDarkMode', isDarkMode.toString());
      }
    }
  }, [isDarkMode, isMounted]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  if (!isMounted) {
    return null; // Evitar renderização no lado do servidor
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
