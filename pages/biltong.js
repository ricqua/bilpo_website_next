import React from "react";
import Head from "next/head";
import LayoutPublic from "../components/LayoutPublic";
import BiltongStickComponent from "../components/BiltongStickComponent";

import BiltongComponent from "../components/BiltongComponent";

export default function biltong() {
  return (
    <LayoutPublic>
      <Head>
        <title>Bilpo - Biltong</title>
      </Head>

      <BiltongComponent />
      <BiltongStickComponent />
    </LayoutPublic>
  );
}
