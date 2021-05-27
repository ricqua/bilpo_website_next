import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../_app";
import Link from "next/link";
import Head from "next/head";
import { biltongBags, biltongSliced } from "../../data/productData";
import firebase from "firebase/app";
import emailjs from "emailjs-com";
import Modal from "../../components/Modal";

export default function b2b() {
  const [showModal, setShowModal] = useState(false);
  const { isContext, setContext } = useContext(UserContext);
  const [isPricing, setPricing] = useState({
    bags: { cost: 6800, min: 15, shipping: 3600, shippingMultiplier: 30 },
    sliced: { cost: 95000, min: 2, shipping: 5000, shippingMultiplier: 5 },
  });
  const [isOrder, setOrder] = useState({
    bags: { qty: 0, shipping: 0, total: 0, min: "none", vat: 0, bagCost: 0 },
    sliced: { qty: 0, shipping: 0, total: 0, min: "none", vat: 0, bagCost: 0 },
    wineGiftset: {
      qty: 0,
      shipping: 0,
      total: 0,
      min: "none",
      vat: 0,
      bagCost: 0,
    },
    biltongGiftset: {
      qty: 0,
      shipping: 0,
      total: 0,
      min: "none",
      vat: 0,
      bagCost: 0,
    },
    total: "0",
  });

  //update order when someone changes the qty
  function handleUpdateOrder(e) {
    e.preventDefault();

    //update qty
    setOrder((prev) => ({
      ...prev,
      [e.target.name]: { ...prev[e.target.name], qty: e.target.value },
    }));

    //update min order status & shipping
    if (e.target.value <= 0) {
      setOrder((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          min: "none",
          shipping: 0,
        },
      }));
    } else if (e.target.value < isPricing[e.target.name].min) {
      setOrder((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          min: "under",
          shipping: isPricing[e.target.name].shipping,
        },
      }));
    } else if (
      e.target.value >= isPricing[e.target.name].min &&
      e.target.value < isPricing[e.target.name].shippingMultiplier
    ) {
      setOrder((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          min: "over",
          shipping: isPricing[e.target.name].shipping,
        },
      }));
    } else {
      setOrder((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          min: "over",
          shipping: 3600,
        },
      }));
    }

    //update VAT & totals
    if (e.target.value <= 0) {
      setOrder((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          vat: 0,
          total: 0,
        },
      }));
    } else {
      setOrder((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          vat:
            e.target.value * isPricing[e.target.name].cost -
            (e.target.value * isPricing[e.target.name].cost) / 1.1,
          total:
            e.target.value * isPricing[e.target.name].cost +
            isOrder[e.target.name].shipping,
        },
      }));
    }
  }

  //Calculate final invoice total
  useEffect(() => {
    setOrder((prev) => ({
      ...prev,
      total: isOrder.bags.total + isOrder.sliced.total,
    }));
  }, [isOrder.bags.total, isOrder.sliced.total]);

  function handlePlaceOrder(e) {
    e.preventDefault();
    //send data to firebase
    const payload = { ...isContext, ...isOrder };

    try {
      firebase
        .firestore()
        .collection("WholesaleOrders")
        .doc(Date.now().toString())
        .set(payload)
        .then(() => {
          console.log("Saved order to Firebase");
        });
    } catch (error) {
      console.log(error);
    }

    emailjs
      .sendForm(
        "service_gbnx6zl",
        "template_br67bbm",
        e.target,
        "user_lJcArVfFvxowZmvIrQxgV"
      )
      .then(
        (result) => {
          console.log("email status:", result.text);
        },
        (error) => {
          console.log("email status:", error.text);
        }
      );
    setShowModal(true);
  }

  return (
    <React.Fragment>
      <Head>
        <title>Bilpo - Wholesale orders</title>
      </Head>
      <main className="rfq">
        {/* <button className="rfq__dashboardButton">Dashboard</button> */}
        <header>
          <Link href="/dashboard">
            <img
              src="/bilpoLogos/Bilpo Logo Hv4 (Full-black).svg"
              alt="Bilpo logo"
            />
          </Link>
          <h1>Wholesale order app</h1>
          <p>
            If you have any questions, please contact us directly on our
            website's contact form, email us on info@bilpo.co.kr, DM us on
            Instagram/Facebook or Kakao message Moonsung (ID: green4life)
          </p>
        </header>
        <section className="rfq__BagsWholesale">
          <section>
            <img
              src="/biltong/biltongBag_1bag.jpg"
              alt="Image of Biltong bag"
            />
            <h2 className="rfq__BagsWholesale--title">60g - Biltong bags</h2>
            <p className="rfq__BagsWholesale--description">
              Bags of 60g of sliced Biltong. The bags have a foil layer on the
              inside to protect against UV, a wide heat seal at the opening and
              oxygen and moisture absorbers inside.
            </p>
          </section>
          <section>
            <div className="rfq__BagsWholesale--retail">
              <strong>Regular retail pricing:</strong>
              <p>1 bag - {biltongBags[0].pricePromotion}</p>
              <p>5 bags - {biltongBags[1].pricePromotion}</p>
              <p>8 bags - {biltongBags[2].pricePromotion}</p>
            </div>
            <div className="rfq__BagsWholesale--wholesale">
              <div className="inputBox_effect1">
                <input
                  type="number"
                  required
                  name="bags"
                  // defaultValue="0"
                  onChange={handleUpdateOrder}
                />
                <span>How many 60g bags?</span>
              </div>

              {isOrder.bags.min === "none" ? null : isOrder.bags.min ===
                "under" ? (
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
                <label>{Math.round(isOrder.bags.vat).toLocaleString()}₩</label>
              </p>
              <p>
                Shipping:
                {isOrder.bags.qty ? (
                  <label>{isOrder.bags.shipping.toLocaleString()}₩</label>
                ) : (
                  <label>0₩</label>
                )}
              </p>
              <p>
                Total:
                <label>{isOrder.bags.total.toLocaleString()}₩</label>
              </p>
              <p className="rfq__costPerBag">
                Cost/bag (incl VAT & shipping):
                <label>
                  {isOrder.bags.qty > 0
                    ? Math.round(
                        isOrder.bags.total / isOrder.bags.qty
                      ).toLocaleString()
                    : "0"}
                  ₩
                </label>
              </p>
              {/* <p>
                shipping boxes:
                <label>
                  {Math.ceil(
                    isOrder.bags.qty / isPricing.bags.shippingMultiplier
                  )}
                </label>
              </p> */}
            </div>
          </section>
        </section>

        <section className="rfq__BagsWholesale">
          <section>
            <img
              src="/biltong/20210314_133108.jpg"
              alt="Image of Biltong bag"
            />
            <h2 className="rfq__BagsWholesale--title">Sliced Biltong / kg</h2>
            <p className="rfq__BagsWholesale--description">
              Sliced biltong is availalbe in 1kg bags. This is best for
              catering, should be refridgerated and not opened/closed too often.
            </p>
          </section>

          <div className="rfq__BagsWholesale--wholesale">
            <div className="inputBox_effect1">
              <input
                type="number"
                required
                name="sliced"
                onChange={handleUpdateOrder}
              />
              <span>How many 1kg bags?</span>
            </div>

            {isOrder.sliced.min === "none" ? null : isOrder.sliced.min ===
              "under" ? (
              <p className="rfq__underMinQty">
                Minimum order quantity: {isPricing.sliced.min} kg
              </p>
            ) : (
              <p className="rfq__overMinQty">
                Minimum order quantity: {isPricing.sliced.min} kg
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
              <label>{Math.round(isOrder.sliced.vat).toLocaleString()}₩</label>
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
              <label>{isOrder.sliced.total.toLocaleString()}₩</label>
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
            <label>{isOrder.bags.qty ? isOrder.bags.qty : 0} bags</label>

            {isOrder.bags.qty ? (
              <label>{isOrder.bags.total.toLocaleString()} ₩</label>
            ) : (
              <label>0 ₩</label>
            )}
          </p>
          <p>
            <label>Sliced:</label>
            <label>{isOrder.sliced.qty ? isOrder.sliced.qty : 0} kg</label>

            {isOrder.sliced.qty ? (
              <label>{isOrder.sliced.total.toLocaleString()} ₩</label>
            ) : (
              <label>0 ₩</label>
            )}
          </p>
          <p className="rfq__orderSummary--total">
            <label>Total:</label>
            {isOrder.total.toLocaleString()} ₩
          </p>
          <div className="rfq__deliveryDetails">
            <p>Contact: {isContext.contactPerson}</p>
            <p>Mobile: {isContext.phone}</p>
            <p>Email: {isContext.email}</p>
            <p>Address: {isContext.deliveryAddress}</p>
            <Link href="/dashboard/account">
              <a>Modify delivery details</a>
            </Link>
          </div>
          <form onSubmit={handlePlaceOrder}>
            <input type="text" name="email" defaultValue={isContext.email} />
            <input
              type="text"
              name="companyName"
              defaultValue={isContext.companyName}
            />
            <input
              type="text"
              name="deliveryAddress"
              defaultValue={isContext.deliveryAddress}
            />
            <input type="text" name="phone" defaultValue={isContext.phone} />

            <input
              type="text"
              name="contactPerson"
              defaultValue={isContext.contactPerson}
            />
            <input
              type="number"
              name="bagsQty"
              defaultValue={isOrder.bags.qty}
            />
            <input
              type="number"
              name="bagsShipping"
              defaultValue={isOrder.bags.shipping}
            />
            <input
              type="number"
              name="bagsTotal"
              defaultValue={isOrder.bags.total}
            />
            <input
              type="number"
              name="slicedQty"
              defaultValue={isOrder.sliced.qty}
            />
            <input
              type="number"
              name="slicedShipping"
              defaultValue={isOrder.sliced.shipping}
            />
            <input
              type="number"
              name="slicedTotal"
              defaultValue={isOrder.sliced.total}
            />
            <input type="number" name="total" defaultValue={isOrder.total} />

            <button type="submit" className="button__lightPrimary">
              Place Order
            </button>
          </form>
        </section>
        {showModal ? (
          <Modal
            id="placeOrderUsModal"
            title="Order placed"
            description="Please check your email inbox to complete your order."
            button="Continue"
            route="/dashboard"
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ) : null}
      </main>
    </React.Fragment>
  );
}
