import React from "react";
import Image from "next/image";
import Head from "next/head";

import ContactComponent from "../components/ContactComponent";

import ProductCard from "../components/ProductCard";
import { merch } from "../data/productData";

const Merchandise = () => {
  return (
    <React.Fragment>
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
              <div className="merch__card">
                <ProductCard data={item} key={item.id} />
              </div>
            );
          })}
        </div>
        <ContactComponent />
      </main>
    </React.Fragment>
  );
};

export default Merchandise;
