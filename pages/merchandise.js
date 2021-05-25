import React from "react";
import Image from "next/image";
import Head from "next/head";

import LayoutPublic from "../components/LayoutPublic";

import ProductCard from "../components/ProductCard";
import { merch } from "../data/productData";

const Merchandise = () => {
  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Merchandise</title>
      </Head>
      <main className="merch">
        <h2 className="merch__title">추가상품</h2>
        <p className="merch__description">
          This is a description of all the products Bilpo offers.
        </p>
        <div className="merch__cards">
          {merch.map((item) => {
            return (
              <div className="merch__card" key={item.id}>
                <ProductCard data={item} />
              </div>
            );
          })}
        </div>
      </main>
    </LayoutPublic>
  );
};

export default Merchandise;
