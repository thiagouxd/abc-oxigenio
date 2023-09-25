import Head from "next/head";
import "../styles/globals.scss";
import "../styles/variables.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ABC - Oxigênio</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
