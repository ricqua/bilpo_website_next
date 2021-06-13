import Head from "next/head";
import React from "react";
import Image from "next/image";
import LayoutPublic from "../components/LayoutPublic";
import InstagramFeed from "../components/InstagramFeed";
import BiltongComponent from "../components/BiltongComponent";
import MerchComponent from "../components/MerchComponent";
import GiveawayComponent from "../components/GiveawayComponent";
import BiltongVsJerkyComponent from "../components/BiltongVsJerkyComponent";
import OnlineStoresComponent from "../components/OnlineStoresComponent";
import AboutComponent from "../components/AboutComponent";

const Home = () => {
  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Home</title>
      </Head>
      <main className="home">
        <section className="home__heroSection">
          <Image
            src="/homeImages/heroSectionBackground.png"
            alt={"Background"}
            layout="fill"
            objectFit="cover"
            object-position="bottom"
          />
          <div className="home__heroSection__logo">
            <Image
              src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
              alt={"Bilpo logo"}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>

        <OnlineStoresComponent />

        <section className="instagram">
          <InstagramFeed counterStart="0" counterEnd="5" />
        </section>

        <BiltongComponent />
        <section className="shipping">
          <img src="/homeImages/shippingImage.png" alt="shipping image" />
          <div>
            <h2>무료배송</h2>
            <p>5봉/ 8봉 묶음상품 주문시</p>
          </div>
        </section>
        <GiveawayComponent />
        <MerchComponent />

        <section className="instagram">
          <InstagramFeed counterStart="6" counterEnd="11" />
        </section>

        <BiltongVsJerkyComponent />
        <AboutComponent />
      </main>
    </LayoutPublic>
  );
};

export default Home;
