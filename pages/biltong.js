import React from "react";
import Image from "next/image";
import Head from "next/head";
import LayoutPublic from "../components/LayoutPublic";

import ProductCard from "../components/ProductCard";
import { biltongBags } from "../data/productData";
import { merch } from "../data/productData";

const Biltong = () => {
  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Biltong</title>
      </Head>

      <main className="biltong">
        <section className="biltong__heroSection">
          {/* <img
            src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
            alt="Bilpo logo"
          /> */}
          {/* <button>Go to Naver</button> */}
        </section>
        <h2 className="biltong__title">빌통</h2>
        <p className="biltong__description">
          Out bottle openers are made from amazing wood with a steel insert
          ensuring long lasting quality. A emblam is laser engraved eto ensure a
          long lasting qulity image.
        </p>
        <div className="biltong__cards">
          {biltongBags.map((item) => {
            return (
              <div className="biltong__card">
                <ProductCard data={item} key={item.id} />
              </div>
            );
          })}
        </div>
      </main>
    </LayoutPublic>
  );
};

export default Biltong;
