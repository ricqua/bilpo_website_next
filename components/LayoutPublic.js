import React from "react";
import Head from "next/head";
import Header from "./Header";
import Link from "next/link";

import Footer from "./Footer";
import ContactComponent from "../components/ContactComponent";

function LayoutPublic({ children }) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie-edge" />

        {/* <meta name="theme-color" content="#005506"/> */}
        {/* <meta name="msapplication-navbutton-color" content="#005506"> */}
        {/* <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"> */}

        <meta property="og:url" content="https://bilpo.co.kr/" />
        <meta
          name="application-name"
          content="빌포 - 천천히 맛의 깊이를 더한 저온건조 페퍼 스테이크"
        />
        <meta
          name="msapplication-tooltip"
          content="빌포 - 천천히 맛의 깊이를 더한 저온건조 페퍼 스테이크"
        />
        <meta
          id="meta_og_title"
          property="og:title"
          content="빌포 - 천천히 맛의 깊이를 더한 저온건조 페퍼 스테이크"
        />
        <meta
          name="description"
          content="빌포 - 천천히 맛의 깊이를 더한 저온건조 페퍼 스테이크"
        />
        <meta
          property="og:description"
          content="빌포 - 천천히 맛의 깊이를 더한 저온건조 페퍼 스테이크"
        />
        <meta
          id="meta_og_image"
          property="og:image"
          content="/OG_Images/Bilpo_og_facebook(1200x630px).png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://bilpo.co.kr/" />

        <meta
          name="description"
          content="빌포 - 천천히 맛의 깊이를 더한 저온건조 페퍼 스테이크"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta
          name="msapplication-config"
          content="/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <title>Bilpo</title>
      </Head>
      <div className="LayoutPublic">
        <Header />
        <main>{children}</main>
        <ContactComponent />
        <Footer />

        <div className="floatingSocialIcons">
          <Link href="https://pf.kakao.com/_nSgus">
            <img
              src="/socialIcons/KakaoLogoAv1.svg"
              alt="kakao logo"
              className="kakaoContactIcon"
            />
          </Link>
          <Link href="https://www.instagram.com/bilpofood/">
            <img
              src="/socialIcons/instagramIcon(colorGradients).png"
              alt="kakao logo"
              className="kakaoContactIcon"
            />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LayoutPublic;
