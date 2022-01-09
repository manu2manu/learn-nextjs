import type { AppProps } from 'next/app';
import { ThemeProviderContext } from '../components/contexts/ThemeContext';
import { ThemeProviderStyled } from '../components/contexts/ThemeProviderStyled';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderContext>
      <ThemeProviderStyled>
        <Component {...pageProps} />
      </ThemeProviderStyled>
    </ThemeProviderContext>
  );
}

export default MyApp;
