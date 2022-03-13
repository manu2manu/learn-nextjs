import Head from 'next/head';

function Header() {
  return (
    <Head>
      <link
        rel="preload"
        as="font"
        href="../fonts/mononoki.Regular.Nerd.Font.ttf"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Manu's website" />
      <meta property="og:title" content="Manu's Portfolio" />
      <meta property="og:description" content="Manu's website" />
      <meta property="og:url" content="https://manus.portfolio.app" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <style>
        {`
            @font-face {
              font-family: MononokiNerdFont;
              src: url(./fonts/mononoki.Regular.Nerd.Font.ttf);
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
