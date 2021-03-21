import "../styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie-edge" />
        <meta
          name="description"
          content="SiamLocalise is a translation and content localisation agency with a strong presence in the Thai and Chinese markets."
        />
        <link rel="icon" href="./favicon-white.png" type="image/png" />
        <title>Bilpo</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
