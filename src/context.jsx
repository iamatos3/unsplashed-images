import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches;
  const storedDarkMode = localStorage.getItem('darkMode') === 'true';
  return storedDarkMode || prefersDarkMode;
}

export const AppProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());
  const [searchTerm, setSearchTerm] = useState('elephant');

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode, searchTerm, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
