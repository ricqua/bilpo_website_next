import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import { UserContext } from "../_app";
import Head from "next/head";

export default function index() {
  const router = useRouter();
  const { isContext, setContext } = useContext(UserContext);

  // const userData = firebase.auth().currentUser;

  // useEffect(() => {
  //   setUser(() => {
  //     firebase.auth().currentUser;
  //   });
  // }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Bilpo - Dashboard</title>
      </Head>
      <div className="dashboard">
        <h1>Dashboard</h1>
        {/* {userData ? <h2>Welcome back, {userData.email}</h2> : null} */}

        <h2>Welcome back, {isContext.companyName}</h2>

        <div className="dashboard__tools">
          <Link href="./dashboard/account">
            <div className="dashboard__tools__tool">
              <img
                src="dashboard/accountIcon.svg"
                alt="account icon"
                className="dashboardToolIcon"
              />
              <label>Account</label>
            </div>
          </Link>

          {isContext.spicecalc === true ? (
            <Link href="./dashboard/spicecalc">
              <div className="dashboard__tools__tool">
                <img
                  src="dashboard/ingredients.svg"
                  alt="spiceCalc icon"
                  className="dashboardToolIcon"
                />
                <label>Spice calculator</label>
              </div>
            </Link>
          ) : null}
          <Link href="./dashboard/b2b">
            <div className="dashboard__tools__tool">
              <img
                src="dashboard/wholesale.svg"
                alt="rfq icon"
                className="dashboardToolIcon"
              />
              <label>Wholesale Orders</label>
            </div>
          </Link>
          {/* <Link href="./dashboard/orderhistory">
            <div className="dashboard__tools__tool">
              <img
                src="dashboard/wholesale.svg"
                alt="wholesale order hisotry icon"
                className="dashboardToolIcon"
              />
              <label>Wholesale Orders - History</label>
            </div>
          </Link> */}
          {isContext.bilpoteam === true ? (
            // <div className="dashboard__tools__backorder">
            // <strong>Backorder tools:</strong>
            // <div>
            <Link href="./dashboard/backorder">
              <div className="dashboard__tools__tool">
                <img
                  src="dashboard/backorderForm.svg"
                  alt="backorder form"
                  className="dashboardToolIcon"
                />
                <label>Backorder form</label>
              </div>
            </Link>
          ) : null}
          {isContext.bilpoteam === true ? (
            <Link href="./dashboard/backorderLog">
              <div className="dashboard__tools__tool">
                <img
                  src="dashboard/reportIcon.svg"
                  alt="backorder log"
                  className="dashboardToolIcon"
                />
                <label>Backorder log</label>
              </div>
            </Link>
          ) : null}
          {isContext.bilpoteam === true ? (
            <Link href="./dashboard/signup">
              <div className="dashboard__tools__tool">
                <img
                  src="dashboard/addUser.svg"
                  alt="backorder log"
                  className="dashboardToolIcon"
                />
                <label>Add new user</label>
              </div>
            </Link>
          ) : null}
        </div>
        <div>
          <Link href="https://bilpo.co.kr/">
            <button className="button__light dashboard__backToWebsiteButton">
              Back to website
            </button>
          </Link>
          <button
            className="button__light dashboard__signOutButton"
            onClick={() =>
              firebase
                .auth()
                .signOut()
                .then(() => router.push("/login"))
            }
          >
            Log Out
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
