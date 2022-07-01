import Head from "next/head";

import GlobalStyles from "assets/themes/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Nl - leiturista</title>
      <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
    </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
