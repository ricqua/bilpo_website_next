import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import { UserContext } from "../_app";
import Head from "next/head";

export default function orderhistory() {
  const router = useRouter();
  const { isContext, setContext } = useContext(UserContext);

  return (
    <React.Fragment>
      <Head>
        <title>Bilpo - Order history</title>
      </Head>
      <main className="dashboard">
        <h1>Wholesale order hisotry</h1>
      </main>
    </React.Fragment>
  );
}
