import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import LayoutPublic from "../components/LayoutPublic";

import ProductCard from "../components/ProductCard";
import { biltongBags } from "../data/productData";

import firebase from "firebase/app";

const Biltong = () => {
  const [isData, setData] = useState();

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("recipe_originalBiltong")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs[1];
        setData(data.data());
        console.log(isData);
      });
  }, []);

  return (
    <LayoutPublic>
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
    </LayoutPublic>
  );
};

export default Biltong;
