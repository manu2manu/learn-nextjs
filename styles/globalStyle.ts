import { createGlobalStyle } from 'styled-components';

type ColorCommonType = {
  gray: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  purple: string;
  aqua: string;
};

type ColorNormalType = ColorCommonType & {
  bg: string;
};

type ColorBrightType = ColorCommonType & {
  fg: string;
};

type ThemeType = {
  colors: {
    white: string;
    normal: ColorNormalType;
    bright: ColorBrightType;
  } 
};

export const theme: ThemeType = {
  colors: {
    white: '#fff',
    normal: {
      bg: '#282828',
      red: '#cc241d',
      green: '#98971a',
      yellow: '#d79921',
      blue: '#458588',
      purple: '#b16286',
      aqua: '#689d6a',
      gray: '#a89984'
    },
    bright: {
      gray: '#928374',
      red: '#fb4934',
      green: '#b8bb26',
      yellow: '#fabd2f',
      blue: '#83a598',
      purple: '#d3869b',
      aqua: '#8ec07c',
      fg: '#ebdbb2'
    }
  }
};

 export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${theme.colors.bright.fg};
    color: ${theme.colors.normal.bg}
  }
`;

