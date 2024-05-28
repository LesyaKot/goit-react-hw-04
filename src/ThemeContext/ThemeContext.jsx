import {  createContext, useContext, useState } from "react";
import styles from './ThemeContext.module.css'

const ThemeContext = createContext();

export const useTheme = () => {
  const value = useContext(ThemeContext);
  return value;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider className={styles.theme} value={{ theme }}>{children}</ThemeContext.Provider>
  );
}