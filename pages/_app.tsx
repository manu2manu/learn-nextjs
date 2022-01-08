import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider {...{ theme }}> 
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
