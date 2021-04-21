import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import initFirebase from "../firebase/initFirebase";

initFirebase();

export default function backorderHistory() {
  const [isData, setData] = useState([]);

  useEffect(() => {
    async function readData() {
      const dataRef = firebase.firestore().collection("Backorders");
      const snapshot = await dataRef.get();
      snapshot.forEach((doc) => {
        var order = doc.data();
        console.log(doc.data());

        setData((prevState) => [...prevState, doc.data()]);
      });
    }
    readData();
  }, []);

  return (
    <React.Fragment>
      {/* <button onClick={readData}>Read Data</button> */}
      <button onClick={() => window.location.reload()}>Refresh</button>

      {!isData
        ? null
        : isData.map((order) => {
            return (
              <div key={order.email} className="backorderHistory">
                <ul className="backorderHistory__list">
                  <li>
                    {order.date}, {order.name}, {order.email}, {order.phone},
                    {order.address}, {order.details}
                  </li>
                </ul>
              </div>
            );
          })}
    </React.Fragment>
  );
}
