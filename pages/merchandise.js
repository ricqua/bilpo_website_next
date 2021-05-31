import React from "react";
import Head from "next/head";

import LayoutPublic from "../components/LayoutPublic";
import MerchComponent from "../components/MerchComponent";

export default function merchandise() {
  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Merchandise</title>
      </Head>
      <MerchComponent />
    </LayoutPublic>
  );
}
