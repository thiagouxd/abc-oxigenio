// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Rajdhani:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />
          <meta name="author" content="RG Comunicação e Identidade" />
          <meta
            name="keywords"
            content="oxigênio, hidrogênio, gases, concentrador de oxigênio, concentrador, gases hospitalares, abc oxigenio"
          />
          <meta
            name="description"
            content="A ABC Oxigênio trabalha com gases já envasados como óxido nitroso, acetileno, hélio, nitrogênio, mistura para solda, argônio, ar comprimido medicinal, ar sintético, além de oferecer tanques criogênicos de gases para o envase dos gases oxigênio e dióxido de carbono."
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-GEW06L1E5X`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GEW06L1E5X', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>

        <body id="home">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
