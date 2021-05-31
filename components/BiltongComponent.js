import React from "react";

import ProductCard from "./ProductCard";
import { biltongBags } from "../data/productData";

const Biltong = () => {
  return (
    <main className="biltong" id="biltong">
      {/* <section className="biltong__heroSection"></section> */}
      <h2 className="biltong__title">빌통</h2>
      <p className="biltong__description">
        Out bottle openers are made from amazing wood with a steel insert
        ensuring long lasting quality. A emblam is laser engraved eto ensure a
        long lasting qulity image.
      </p>
      <div className="biltong__cards">
        {biltongBags.map((item) => {
          return (
            <div className="biltong__card" key={item.id}>
              <ProductCard data={item} />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Biltong;
