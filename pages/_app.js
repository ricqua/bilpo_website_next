import "../styles/main.css";
import React, { useEffect } from "react";

import firebase from "firebase/app";
import "firebase/firestore";
import initFirebase from "../firebase/initFirebase";
initFirebase();
const auth = firebase.auth();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in:", user.email);
      } else {
        console.log("User logged out");
      }
    });
  }, [auth.user]);

  return <Component {...pageProps} />;
}

export default MyApp;
