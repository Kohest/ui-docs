import React, { createContext, useContext, useState } from "react";
import { changeCssVariables } from "../services/changeCssVariables";

export const THEME_LIGHT = "light";
export const THEME_DARK = "dark";

interface ThemeContextType {
  theme: string | null;
  change: (name: string) => void;
}

const defaultContextValue: ThemeContextType = {
  theme: null,
  change: () => {},
};

interface Props {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const ThemeProvider: React.FC<Props> = ({ children, ...props }) => {
  const [theme, setTheme] = useState<string | null>(null);

  const change = (name: string) => {
    setTheme(name);
    changeCssVariables(name);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        change,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
