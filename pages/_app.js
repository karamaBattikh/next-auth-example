import Head from "next/head";
import { Provider } from "next-auth/client";
import "styles/globals.css";
import Header from "components/header";

function MyApp({ Component, pageProps }) {
  const { session } = pageProps;
  return (
    <Provider session={session}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>App</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
