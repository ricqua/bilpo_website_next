import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../_app";
import Link from "next/link";

export default function b2b() {
  const { isContext, setContext } = useContext(UserContext);
  const [isPricing, setPricing] = useState({
    bags: { cost: 7500, min: 15, shipping: 3600 },
    sliced: { cost: 115000, min: 2, shipping: 5000 },
  });
  const [isOrder, setOrder] = useState({
    bags: { qty: "", shipping: "", total: "" },
    sliced: { qty: "", shipping: "", total: "" },
  });

  const handleUpdateOrder = (e) => {
    e.preventDefault();
    setOrder((prev) => ({
      ...prev,
      [e.target.name]: { ...prev[e.target.name], qty: e.target.value },
    }));
  };

  useEffect(() => {
    if (isOrder.bags.qty > 0) {
      setOrder((prev) => ({
        ...prev,
        bags: {
          ...prev.bags,
          shipping: isPricing.bags.shipping,
          total:
            isOrder.bags.qty * isPricing.bags.cost + isPricing.bags.shipping,
        },
      }));
    }

    if (isOrder.sliced.qty > 0) {
      setOrder((prev) => ({
        ...prev,
        sliced: {
          ...prev.sliced,
          shipping: isPricing.sliced.shipping,
          total:
            isOrder.sliced.qty * isPricing.sliced.cost +
            isPricing.sliced.shipping,
        },
      }));
    }
  }, [isOrder.bags.qty, isOrder.sliced.qty]);

  function handlePlaceOrder() {
    alert("Order placed");
  }

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
                onChange={handleUpdateOrder}
              />
              <span>How many 60g bags?</span>
            </div>

            {isOrder.bags.qty < isPricing.bags.min ? (
              <p className="rfq__underMinQty">
                Minimum order quantity: {isPricing.bags.min} bags
              </p>
            ) : (
              <p className="rfq__overMinQty">
                Minimum order quantity: {isPricing.bags.min} bags
              </p>
            )}

            <p>
              COG's:
              <label>
                {(
                  Math.round(isPricing.bags.cost / 1.1) * isOrder.bags.qty
                ).toLocaleString()}
                ₩
              </label>
            </p>
            <p>
              VAT (10%):
              <label>
                {Math.round(
                  isPricing.bags.cost * isOrder.bags.qty -
                    (isOrder.bags.qty * isPricing.bags.cost) / 1.1
                ).toLocaleString()}
                ₩
              </label>
            </p>
            <p>
              Shipping:
              {isOrder.bags.qty ? (
                <label>{isPricing.bags.shipping.toLocaleString()}₩</label>
              ) : (
                <label>0₩</label>
              )}
            </p>
            <p>
              Total:
              <label>
                {(
                  isOrder.bags.qty * isPricing.bags.cost +
                  isOrder.bags.shipping
                ).toLocaleString()}
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
                onChange={handleUpdateOrder}
              />
              <span>How many 60g bags?</span>
            </div>

            {isOrder.sliced.qty < isPricing.sliced.min ? (
              <p className="rfq__underMinQty">
                Minimum order quantity: {isPricing.sliced.min} bags
              </p>
            ) : (
              <p className="rfq__overMinQty">
                Minimum order quantity: {isPricing.sliced.min} bags
              </p>
            )}

            <p>
              COG's:
              <label>
                {(
                  Math.round(isPricing.sliced.cost / 1.1) * isOrder.sliced.qty
                ).toLocaleString()}
                ₩
              </label>
            </p>
            <p>
              VAT (10%):
              <label>
                {Math.round(
                  isPricing.sliced.cost * isOrder.sliced.qty -
                    (isOrder.sliced.qty * isPricing.sliced.cost) / 1.1
                ).toLocaleString()}
                ₩
              </label>
            </p>
            <p>
              Shipping:
              {isOrder.sliced.qty ? (
                <label>{isPricing.sliced.shipping.toLocaleString()}₩</label>
              ) : (
                <label>0₩</label>
              )}
            </p>
            <p>
              Total:
              <label>
                {(
                  isOrder.sliced.qty * isPricing.sliced.cost +
                  isOrder.sliced.shipping
                ).toLocaleString()}
                ₩
              </label>
            </p>
          </div>
        </section>
        <section className="rfq__orderSummary">
          <h3>Order summary</h3>
          <p className="rfq__orderSummary--headings">
            <label>Item</label>
            <label>Qty</label>
            {/* <label>COG's</label> */}
            {/* <label>Shipping</label> */}
            {/* <label>VAT(10%)</label> */}
            <label>Total</label>
          </p>
          <p>
            <label>60g bags:</label>
            <label>{isOrder.bags.qty ? isOrder.bags.qty : 0}</label>

            {isOrder.bags.qty ? (
              <label>{isOrder.bags.total.toLocaleString()}₩</label>
            ) : (
              <label>0</label>
            )}
          </p>
          <p>
            <label>Sliced:</label>
            <label>{isOrder.sliced.qty ? isOrder.sliced.qty : 0}</label>

            {isOrder.sliced.qty ? (
              <label>{isOrder.sliced.total.toLocaleString()}₩</label>
            ) : (
              <label>0</label>
            )}
          </p>
          <p className="rfq__orderSummary--total">
            <label>Total:</label>
            {(isOrder.bags.total + isOrder.sliced.total).toLocaleString()}₩
          </p>
          <div className="rfq__deliveryDetails">
            <p>Contact: {isContext.contactPerson}</p>
            <p>Mobile: {isContext.phone}</p>
            <p>Mobile: {isContext.email}</p>
            <p>Address: {isContext.deliveryAddress}</p>
            <Link href="/dashboard/account">
              <a>Modify delivery details</a>
            </Link>
          </div>
          <button className="button__lightPrimary" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </section>
      </section>
    </main>
  );
}
