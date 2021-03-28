import React from "react";
import Image from "next/image";
import Head from "next/head";

import ProductCard from "../components/ProductCard";
import { biltongBags } from "../data/productData";

const Biltong = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Bilpo - Biltong</title>
      </Head>
      <main className="biltong">
        <h2 className="biltong__title">빌통</h2>
        <p className="biltong__description">
          This is a description of all the products Bilpo offers.
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
    </React.Fragment>
  );
};

export default Biltong;
