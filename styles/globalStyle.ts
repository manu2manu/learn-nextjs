import { createGlobalStyle, DefaultTheme } from 'styled-components';

// Based on Gruvbox palette
// white: '#fff',
// orange: '#d05d3c',
// orange166: '#d65d0e',
// orange208: '#fe8019',
// bg0_h: '#1d2021',
// bg1: '#3c3836',
// bg2: '#504945',
// bg3: '#665c54',
// bg4: '#7c6f64',
// fg0: '#fbf1c7',
// fg1: '#ebdbb2',
// fg2: '#d5c4a1',
// normal: {
//   bg: '#282828',
//   red: '#cc241d',
//   green: '#98971a',
//   yellow: '#d79921',
//   blue: '#458588',
//   purple: '#b16286',
//   aqua: '#689d6a',
//   gray: '#a89984'
// },
// bright: {
//   gray: '#928374',
//   red: '#fb4934',
//   green: '#b8bb26',
//   yellow: '#fabd2f',
//   blue: '#83a598',
//   purple: '#d3869b',
//   aqua: '#8ec07c',
//   fg: '#ebdbb2'
// }
//

export const lightTheme: DefaultTheme = {
  bodyBg: '#fbf1c7',
  text: '#282828',
  colorNavBar: '#282828',
  colorNavBarScroll: '#3c3836',
  colorButton: '#161616',
  box: '#282828',
  boxShadow: '#282828',
  tooltip: '#282828',
  colors: {
    bg1: '#504945',
    orange208: '#fe8019',
    orange: '#d05d3c',
    gray: '#7c6f64'
  }
};

export const darkTheme: DefaultTheme = {
  bodyBg: '#3c3836',
  text: '#d0d0d3',
  colorNavBar: '#757575',
  colorNavBarScroll: '#3c3836',
  colorButton: '#161616',
  box: '#4a4745',
  boxShadow: '#282828',
  tooltip: '#757575',
  colors: {
    bg1: '#504945',
    orange208: '#fe8019',
    orange: '#d05d3c',
    gray: '#7c6f64'
  }
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }: any) => theme.bodyBg}; 
    color: ${({ theme }: any) => theme.text};
  }
`;
