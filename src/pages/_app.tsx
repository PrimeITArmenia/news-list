import Head from "next/head";
import "@/styles/globals.scss";
import { Header, Footer } from "@/components";
import React from "react";
import { AppProps } from "next/app";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Trading Bull</title>
        <meta name="description" content="Trading Bull description" />
        <link rel="icon" href="/assets/icons/trading-bull-logo.svg" />
      </Head>
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    </>
  );
};

export default App;
