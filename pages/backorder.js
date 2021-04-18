import React from "react";
// import Image from "next/image";
import Head from "next/head";

// import ProductCard from "../components/ProductCard";
// import { biltongBags } from "../data/productData";

const Biltong = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Bilpo - Backorder</title>
      </Head>
      <main className="backorder">
        <img
          src="/bilpoLogos/Bilpo Logo Hv4 (Full-white).svg"
          alt="Bilpo logo"
          className="backorder__logo"
        />
        <h2 className="backorder__title">Backorder Form</h2>
        <p className="backorder__description">
          Thank you for your interest. We are currently out of stock but will
          still accept orders and promise to deliver as soon as the next batch
          is ready. Please provide your contact details below.
        </p>
        <form className="backorderForm">
          <div className="backorderForm__inputBox">
            <input type="text" required />
            <span>Name</span>
          </div>
          <div className="backorderForm__inputBox">
            <input type="text" required />
            <span>Email</span>
          </div>
          <div className="backorderForm__inputBox">
            <input type="text" required />
            <span>Phone</span>
          </div>
          <div className="backorderForm__inputBox">
            <input type="text" required />
            <span>Delivery Address</span>
          </div>
          <div className="backorderForm__inputBox">
            <input type="text" required />
            <span>Order details</span>
          </div>
          <button className="button__lightPrimary">Submit</button>
        </form>
        <p className="copyrightNotice backorder__copyrightNotice ">
          Copyright @ Bilpo 2021
        </p>
      </main>
    </React.Fragment>
  );
};

export default Biltong;
