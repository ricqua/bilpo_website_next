import "../styles/main.css";
import React, { useState, useEffect, createContext, useMemo } from "react";
import initFirebase from "../firebase/initFirebase";
initFirebase();
import firebase from "firebase/app";

export const UserContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [isContext, setContext] = useState({});
  const contextProviderValue = useMemo(() => ({ isContext, setContext }), [
    isContext,
    setContext,
  ]);

  // useEffect(() => {}, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("User logged in:", user.email);
        setContext({ userData: { uid: user.uid, email: user.email } });
        firebase
          .firestore()
          .collection("Users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            const newEntries = doc.data();
            setContext((oldContext) => {
              return { ...oldContext.userData, ...newEntries };
            });
          });
      } else {
        console.log("User logged out");
      }
    });
  }, [firebase.auth().user]);

  return (
    <UserContext.Provider value={contextProviderValue}>
      <Component {...pageProps} />;
    </UserContext.Provider>
  );
}

export default MyApp;
