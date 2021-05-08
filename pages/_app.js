import "../styles/main.css";
import React, { useEffect } from "react";
import initFirebase from "../firebase/initFirebase";
initFirebase();

import firebase from "firebase/app";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in:", user.email);
      } else {
        console.log("User logged out");
      }
    });
  }, [firebase.auth().user]);

  return <Component {...pageProps} />;
}

export default MyApp;
