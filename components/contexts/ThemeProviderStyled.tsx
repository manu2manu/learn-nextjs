import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, lightTheme } from "../../styles/globalStyle";
import { BaseProps } from "../../types";
import { ThemeContextP } from "./ThemeContext";

export const ThemeProviderStyled = ({ children }: BaseProps) => {
  const { dark } = useContext(ThemeContextP);
  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}> 
      <GlobalStyle />
      {children}
    </ThemeProvider>

  );
 };

