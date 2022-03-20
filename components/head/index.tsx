import Head from 'next/head';

function Header() {
  return (
    <Head>
      <link rel="preload" as="font" href="../fonts/mononoki.icons.min.ttf" type="font/ttf" crossOrigin="anonymous" />
      <link rel="preload" as="font" href="../fonts/mononoki.fonts.ttf" type="font/ttf" crossOrigin="anonymous" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="manujsdev's portfolio: this is my postfolio. I show you who I am" />
      <meta property="og:title" content="manujsdev's portfolio" />
      <meta property="og:description" content="manujsdev's portfolio: this is my portfolio. I show you who I am" />
      <meta property="og:url" content="https://manujsdev.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:card" content="summary_large_image" />
      <title>manujsdev's portfolio</title>
      <style>
        {`
            @font-face {
              font-family: MononokiNerdFont;
              src: url(./fonts/mononoki.fonts.ttf);
              font-display: swap;
            }
            @font-face {
              font-family: MononokiNerdFont;
              src: url(./fonts/mononoki.icons.min.ttf);
              font-display: swap;
            }
            * {
              font-family: MononokiNerdFont;
            }
            `}
      </style>
    </Head>
  );
}

export default Header;
