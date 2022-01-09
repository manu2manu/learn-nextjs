import { createContext, useState } from "react";
import { BaseProps } from "../../types";

const defaultState = {
  dark: false,
};

interface IThemeContext {
  dark: boolean;
  toggleDark?: () => void;
}

export const ThemeContextP = createContext<Partial<IThemeContext>>({});

export const ThemeProviderContext = ({ children }: BaseProps) => {
  const [dark, setDark] = useState(defaultState.dark);

  const toggleDark = () => setDark(!dark);

  return (
    <ThemeContextP.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContextP.Provider>
  );
};
