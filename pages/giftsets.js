import React from "react";
import Image from "next/image";
import Head from "next/head";
import LayoutPublic from "../components/LayoutPublic";

import GiftsetCard from "../components/GiftsetCard";
import { giftsets } from "../data/productData";

const Giftsets = () => {
  const mishmash = giftsets[0];
  const bilpo = giftsets[1];
  const brewery304 = giftsets[2];

  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Giftsets</title>
      </Head>
      <main className="giftsets">
        <div className="giftsets__header">
          <h2>선물세트</h2>
          <p>This is a description of all the giftsets Bilpo offers.</p>
        </div>

        {/* ==============  MISHMASH GIFTSETS ============== */}
        <section className="giftsets__section">
          {/* <div className="giftsets__company">
            <div className="giftsets__company__logos">
              <img
                src="/bilpoLogos/Bilpo Logo Hv4 (Full-black).svg"
                alt="Bilpo logo"
              />
              <span>+</span>
              <img
                src="/giftsets/MishMash - Logo(redText).svg"
                alt="Mishmash logo"
              />
            </div>
            <p className="giftsets__company__description">
              {mishmash.companyDescription}
            </p>
          </div> */}
          <div className="giftset_cards">
            <GiftsetCard data={mishmash.products[0]} loading="eager" />
          </div>
        </section>

        {/* ==============  BREWERY 304 GIFTSETS ============== */}
        <section className="giftsets__section">
          {/* <div className="giftsets__company">
            <div className="giftsets__company__logos">
              <img
                src="/bilpoLogos/Bilpo Logo Hv4 (Full-black).svg"
                alt="Bilpo logo"
              />
              <span>+</span>
              <img
                src="/giftsets/Brewery304 - Logo (solidBlack).svg"
                alt="Brewery 304 logo"
              />
            </div>
            <p className="giftsets__company__description">
              {brewery304.companyDescription}
            </p>
          </div> */}
          <div className="giftsets__cards">
            <GiftsetCard
              //   companyLogo={brewery304}
              data={brewery304.products[0]}
              loading="eager"
            />
            <GiftsetCard data={brewery304.products[1]} loading="eager" />
          </div>
        </section>

        {/* ==============  BILPO GIFTSETS ============== */}
        <section className="giftsets__section">
          {/* <div className="giftsets__company">
            <div className="giftsets__company__logos">
              <img
                src="/bilpoLogos/Bilpo Logo Hv4 (Full-black).svg"
                alt="Bilpo logo"
              />
            </div>
            <p className="giftsets__company__description">
              {bilpo.companyDescription}
            </p>
          </div> */}
          <div className="giftsets__cards">
            <GiftsetCard data={bilpo.products[0]} loading="eager" />
            <GiftsetCard data={bilpo.products[1]} loading="eager" />
          </div>
        </section>
      </main>
    </LayoutPublic>
  );
};

export default Giftsets;
