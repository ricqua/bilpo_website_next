import React from "react";
import Image from "next/image";
import Head from "next/head";

import GiftsetCard from "../components/GiftsetCard";
import { giftsets } from "../data/productData";

const Giftsets = () => {
  // console.log(giftsets[0].companyDescription);

  return (
    <React.Fragment>
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
          <div className="giftsets__company">
            <div className="giftsets__company__logo">
              <Image
                src={giftsets[0].logo}
                alt={giftsets[0].alt}
                width={1000}
                height={350}
              />
            </div>
            <p className="giftsets__company__description">
              {giftsets[0].companyDescription}
            </p>
          </div>
          <div className="giftset_cards">
            <GiftsetCard data={giftsets[0].products[0]} loading="eager" />
          </div>
        </section>

        {/* ==============  BILPO GIFTSETS ============== */}

        <section className="giftsets__section">
          <div className="giftsets__company">
            <div className="giftsets__company__logo">
              <Image
                src={giftsets[2].logo}
                alt={giftsets[2].alt}
                width={500}
                height={500}
              />
            </div>
            <p className="giftsets__company__description">
              {giftsets[2].companyDescription}
            </p>
          </div>
          <div className="giftsets__cards">
            <GiftsetCard data={giftsets[2].products[0]} loading="eager" />
            <GiftsetCard data={giftsets[2].products[1]} loading="eager" />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Giftsets;
