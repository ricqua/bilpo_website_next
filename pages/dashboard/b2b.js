import React, { useState, useContext } from "react";
// import { UserContext } from "../_app";

export default function b2b() {
  // const { isContext, setContext } = useContext(UserContext);
  const [isPricing, setPricing] = useState({
    bags: { cost: 7500, min: 15, shipping: 3600 },
    sliced: { cost: 115000, min: 2, shipping: 3600 },
  });
  const [isOrder, setOrder] = useState({
    bags: { qty: "", total: "" },
    sliced: { qty: "", total: "" },
  });

  // const [isOrder, setOrder] = useState({
  //   bags: { cost: 7500, order: "", min: 15, shipping: 3600, total: "" },
  //   sliced: { cost: 115000, order: "", min: 2, shipping: 3600, total: "" },
  // });
  const handleUpdateOrder = (e) => {
    e.preventDefault();
    setOrder((prev) => ({
      ...prev,
      [e.target.name]: { ...prev[e.target.name], qty: e.target.value },
    }));
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
      <section className="rfq__BagsWholesale">
        <section>
          <img src="/biltong/biltongBag_1bag.jpg" alt="Image of Biltong bag" />
          <h2 className="rfq__BagsWholesale--title">60g - Biltong bags</h2>
          <p className="rfq__BagsWholesale--description">
            Bags of 60g of sliced Biltong. The bags have a foil layer on the
            inside to protect against UV, a wide heat seal at the opening and
            oxygen and moisture absorbers inside.
          </p>
        </section>
        <section>
          {/* <div className="rfq__BagsWholesale--retail">
            <strong>Retail pricing:</strong>
            <p>1 bag - 11,000₩</p>
            <p>5 bags - 48,000₩</p>
            <p>8 bags - 75,000₩</p>
          </div> */}
          <div className="rfq__BagsWholesale--wholesale">
            <div className="inputBox_effect1">
              <input
                type="number"
                required
                name="bags"
                value={
                  isOrder.bags.order <= isOrder.bags.min
                    ? isOrder.bags.order
                    : isOrder.bags.order
                }
                onChange={handleUpdateOrder}
              />
              <span>How many 60g bags?</span>
            </div>

            {isOrder.bags.order < isOrder.bags.min ? (
              <p className="rfq__underMinQty">
                Minimum order quantity: {isOrder.bags.min} bags
              </p>
            ) : (
              <p className="rfq__overMinQty">
                Minimum order quantity: {isOrder.bags.min} bags
              </p>
            )}

            <p>
              COG's:
              <label>
                {(
                  Math.round(isOrder.bags.cost / 1.1) * isOrder.bags.order
                ).toLocaleString()}
                ₩
              </label>
            </p>
            <p>
              VAT (10%):
              <label>
                {Math.round(
                  isOrder.bags.cost * isOrder.bags.order -
                    (isOrder.bags.order * isOrder.bags.cost) / 1.1
                ).toLocaleString()}
                ₩
              </label>
            </p>
            <p>
              Shipping:
              {isOrder.bags.order ? (
                <label>{isOrder.bags.shipping.toLocaleString()}₩</label>
              ) : (
                <label>0₩</label>
              )}
            </p>
            <p>
              Total:
              <label>
                {(isOrder.bags.order * isOrder.bags.cost)
                  // isOrder.bags.shipping
                  .toLocaleString()}
                ₩
              </label>
            </p>
          </div>
        </section>
      </section>

      <section className="rfq__BagsWholesale">
        <section>
          <img src="/biltong/20210314_133108.jpg" alt="Image of Biltong bag" />
          <h2 className="rfq__BagsWholesale--title">Sliced Biltong / kg</h2>
          <p className="rfq__BagsWholesale--description">
            Sliced biltong is availalbe in 1kg bags. This is best for catering,
            should be refridgerated and not opened/closed too often.
          </p>
        </section>
        <section>
          {/* <div className="rfq__BagsWholesale--retail">
            <strong>Retail pricing:</strong>
            <p>1 bag - 11,000₩</p>
            <p>5 bags - 48,000₩</p>
            <p>8 bags - 75,000₩</p>
          </div> */}
          <div className="rfq__BagsWholesale--wholesale">
            <div className="inputBox_effect1">
              <input
                type="number"
                required
                name="sliced"
                value={
                  isOrder.sliced.order <= isOrder.sliced.min
                    ? isOrder.sliced.order
                    : isOrder.sliced.order
                }
                onChange={handleUpdateOrder}
              />
              <span>How many 1kg bags?</span>
            </div>

            {isOrder.sliced.order < isOrder.sliced.min ? (
              <p className="rfq__underMinQty">
                Minimum order quantity: {isOrder.sliced.min} kg's
              </p>
            ) : (
              <p className="rfq__overMinQty">
                Minimum order quantity: {isOrder.sliced.min} kg's
              </p>
            )}

            <p>
              COG's:
              <label>
                {(
                  Math.round(isOrder.sliced.cost / 1.1) * isOrder.sliced.order
                ).toLocaleString()}
                ₩
              </label>
            </p>
            <p>
              VAT (10%):
              <label>
                {Math.round(
                  isOrder.sliced.cost * isOrder.sliced.order -
                    (isOrder.sliced.order * isOrder.sliced.cost) / 1.1
                ).toLocaleString()}
                ₩
              </label>
            </p>
            <p>
              Total:
              <label>
                {(isOrder.sliced.order * isOrder.sliced.cost).toLocaleString()}₩
              </label>
            </p>
          </div>
        </section>
        <section className="rfq__orderSummary">
          <h3>Order summary</h3>
          <p>
            <label>Item</label>
            <label>Qty</label>
            {/* <label>COG's</label> */}
            {/* <label>Shipping</label> */}
            {/* <label>VAT(10%)</label> */}
            <label>Total</label>
          </p>
          <p>
            <label>60g bags:</label>
            <label>{isOrder.bags.order ? isOrder.bags.order : 0}</label>

            {isOrder.bags.order ? (
              <label>
                {(isOrder.bags.order * isOrder.bags.cost).toLocaleString()}₩
              </label>
            ) : (
              <label>0</label>
            )}
          </p>
          <p>
            <label>Sliced:</label>
            <label>{isOrder.sliced.order ? isOrder.sliced.order : 0}</label>

            {isOrder.sliced.order ? (
              <label>
                {(isOrder.sliced.order * isOrder.sliced.cost).toLocaleString()}₩
              </label>
            ) : (
              <label>0</label>
            )}
          </p>
        </section>
      </section>
    </main>
  );
}
