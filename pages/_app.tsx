import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { DrawerContext } from '../components/contexts/DrawerContext';
import { ThemeProviderContext } from '../components/contexts/ThemeContext';
import { ThemeProviderStyled } from '../components/contexts/ThemeProviderStyled';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
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
