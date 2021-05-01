import React from "react";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function index() {
  return (
    <React.Fragment>
      <Header />
      <h1>Dashboard</h1>
      <p>Welcome back, Hamster</p>
      <ul>
        <li>
          <Link href="./dashboard/spicecalc">SpiceCalc</Link>
        </li>
        <li>
          <Link href="./dashboard/backorder">Backorder form</Link>
        </li>
        <li>
          <Link href="./dashboard/backorderLog">Backorder Log</Link>
        </li>
        <li>
          <Link href="./dashboard/b2b">Wholesale order form</Link>
        </li>
      </ul>
      <Footer />
    </React.Fragment>
  );
}

export default index;
