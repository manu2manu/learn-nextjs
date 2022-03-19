import type { AppProps } from 'next/app';
import { DrawerContext } from '../components/contexts/DrawerContext';
import { ThemeProviderContext } from '../components/contexts/ThemeContext';
import { ThemeProviderStyled } from '../components/contexts/ThemeProviderStyled';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProviderContext>
      <ThemeProviderStyled>
        <DrawerContext>
          <Component {...pageProps} />
        </DrawerContext>
      </ThemeProviderStyled>
    </ThemeProviderContext>
  );
}

export default MyApp;
