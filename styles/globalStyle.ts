import { createGlobalStyle, DefaultTheme } from 'styled-components';

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
    orange: string;
    orange166: string;
    orange208: string;
    bg0_h: string;
    bg1: string;
    bg2: string;
    bg3: string;
    bg4: string;
    fg0: string;
    fg1: string;
    fg2: string;
    normal: ColorNormalType;
    bright: ColorBrightType;
  } 
};

export const lightTheme: DefaultTheme = {
  bodyBg: '#fbf1c7',
  text: '#282828',
  colors: {

  }
};

export const darkTheme: DefaultTheme = {
  bodyBg: '#3c3836',
  text: '#fff'
}

// Based on Gruvbox palette
export const theme: ThemeType = {
  colors: {
    white: '#fff',
    orange: '#d05d3c',
    orange166: '#d65d0e',
    orange208: '#fe8019',
    bg0_h: '#1d2021',
    bg1: '#3c3836',
    bg2: '#504945',
    bg3: '#665c54',
    bg4: '#7c6f64',
    fg0: '#fbf1c7',
    fg1: '#ebdbb2',
    fg2: '#d5c4a1',
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
    background: ${({theme}: any ) => theme.bodyBg}; 
    color: ${({theme}: any) => theme.text};
  }
`;
