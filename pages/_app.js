import Head from "next/head";
import "../styles/main.css";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/backorder" || router.pathname === "/spiceCalc"
      ? false
      : true;
  const showFooter =
    router.pathname === "/backorder" || router.pathname === "/spiceCalc"
      ? false
      : true;
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
        <meta name="description" content="Bilpo" />
        <link rel="icon" href="./favicon-white.png" type="image/png" />
        <title>Bilpo</title>
      </Head>
      {showHeader && <Header />}
      {/* <Header /> */}
      <Component {...pageProps} />
      {showFooter && <Footer />}
      {/* <Footer /> */}
    </Layout>
  );
}

export default MyApp;
