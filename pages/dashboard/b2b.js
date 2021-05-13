import React, { useState, useContext } from "react";
import { UserContext } from "../_app";

export default function b2b() {
  const { isContext, setContext } = useContext(UserContext);
  const [isOrder, setOrder] = useState({ bagsValue: 0, slicedValue: 3 });

  const handleChange = (e) => {
    // e.preventDefault();
    // setOrder(1);
    setOrder((prev) => ({
      ...prev,
      // bagsValue: 10,
      [e.target.name]: e.target.value,
    }));
    console.log(isOrder);
  };

  const BagsWholesale = () => {
    return (
      <React.Fragment>
        <main className="rfq__BagsWholesale">
          <section>
            <img
              src="/biltong/biltongBag_1bag.jpg"
              alt="Image of Biltong bag"
            />
            <h2 className="rfq__BagsWholesale--title">60g - Biltong bags</h2>
            <p className="rfq__BagsWholesale--description">
              Description: Bags of Biltong sliced to 60g. All bags have oxygen
              and moisture absorbers, and have been heat sealed in foil bags
              which give them a shelf life of 21 days.
            </p>
          </section>
          <section>
            {/* <div className="rfq__BagsWholesale--retail">
              <strong>Retail:</strong>
              <p>1 bag - 11,000₩</p>
              <p>5 bags - 48,000₩</p>
              <p>8 bags - 75,000₩</p>
            </div> */}
            <div className="rfq__BagsWholesale--wholesale">
              <div className="inputBox_effect1">
                <input
                  type="number"
                  required
                  name="bagsValue"
                  value={isOrder.bagsValue}
                  onChange={(e) => {
                    e.preventDefault();
                    setOrder((prev) => ({
                      ...prev,
                      bagsValue: e.target.value,
                    }));
                  }}
                  // value={isOrder.bagsValue}
                />
                <span>How many bags?</span>
              </div>

              <p>
                COG's:
                <label>{(6818 * isOrder.bagsValue).toLocaleString()}₩</label>
              </p>
              <p>
                VAT (10%):
                <label>
                  {Math.round(
                    7500 * isOrder.bagsValue - (isOrder.bagsValue * 7500) / 1.1
                  ).toLocaleString()}
                  ₩
                </label>
              </p>
              <p>
                Total:
                <label>{(isOrder.bagsValue * 7500).toLocaleString()}₩</label>
              </p>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  };

  return (
    <main className="rfq">
      <header>
        <img
          src="/bilpoLogos/Bilpo Logo Hv4 (Full-black).svg"
          alt="Bilpo logo"
        />
        <h1>Wholesale order app</h1>
        <p>
          If you have any questions, please contact us directly on our website's
          contact form, email us on info@bilpo.co.kr, DM us on
          Instagram/Facebook or Kakao message Moonsung (ID: green4life)
        </p>
      </header>
      {/* <SlicedBiltongWholesale /> */}
      <BagsWholesale />
      {/* <BiltongGiftsetWholesale/> */}
      {/* <WineBiltongGiftsetWohlesale /> */}
    </main>
  );
}
