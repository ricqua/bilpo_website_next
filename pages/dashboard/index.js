import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import { UserContext } from "../_app";

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
      <div className="dashboard">
        <h1>Dashboard</h1>
        {/* {userData ? <h2>Welcome back, {userData.email}</h2> : null} */}
        {isContext ? <h2>Welcome back, {isContext.userData.email}</h2> : null}

        <Link href="./dashboard/account">
          <p>Account</p>
        </Link>
        <div className="dashboard__tools">
          <Link href="./dashboard/spicecalc">
            <p>Spice calculator</p>
          </Link>
          <Link href="./dashboard/b2b">
            <p>RFQ</p>
          </Link>
          <div className="dashboard__tools__backorder">
            <strong>Backorder tools:</strong>
            <div>
              <Link href="./dashboard/backorder">
                <p>Form</p>
              </Link>
              <Link href="./dashboard/backorderLog">
                <p>Log</p>
              </Link>
            </div>
          </div>
        </div>
        <Link href="./">
          <p>Back to website</p>
        </Link>
        <p
          // className="button__lightPrimary"
          onClick={() =>
            firebase
              .auth()
              .signOut()
              .then(() => router.push("/login"))
          }
        >
          Log Out
        </p>
      </div>
    </React.Fragment>
  );
}
